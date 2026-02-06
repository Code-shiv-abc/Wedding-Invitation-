import { test, expect } from '@playwright/test';

// Define LayoutShift interface as it might not be in standard types yet
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

test.describe('Mobile Performance & Stability', () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone 12 Pro dimensions

  test('should have excellent Core Web Vitals on mobile', async ({ page }) => {
    // Navigate
    await page.goto('/');

    // Wait for everything to settle
    await page.waitForTimeout(3000);

    const lcpDetails = await page.evaluate(() => {
      return new Promise<{ startTime: number; elementHTML: string; elementClass: string }>((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          // We want the LCP element details
          // @ts-expect-error - element property exists on LargestContentfulPaint but type definition might be missing
          const element = lastEntry.element as Element | null;
          resolve({
            startTime: lastEntry.startTime,
            elementHTML: element ? element.outerHTML.substring(0, 100) : 'unknown',
            elementClass: element ? element.className : 'unknown'
          });
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });

        // Fallback
        setTimeout(() => resolve({ startTime: 0, elementHTML: 'timeout', elementClass: '' }), 2000);
      });
    });

    console.log(`Mobile LCP: ${lcpDetails.startTime}ms`);
    console.log(`LCP Element: ${lcpDetails.elementHTML}`);
    console.log(`LCP Class: ${lcpDetails.elementClass}`);

    // Check Navigation Timing to see if load itself was slow
    const navTiming = await page.evaluate(() => {
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        return {
            loadEventEnd: nav.loadEventEnd,
            domContentLoadedEventEnd: nav.domContentLoadedEventEnd,
            responseEnd: nav.responseEnd
        };
    });
    console.log('Navigation Timing:', navTiming);

    // Ideally < 2500ms for "Good"
    expect(lcpDetails.startTime).toBeLessThan(2500);

    // CLS Check
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let accumulatedCLS = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShift = entry as unknown as LayoutShift;
            if (!layoutShift.hadRecentInput) {
              accumulatedCLS += layoutShift.value;
            }
          }
        }).observe({ type: 'layout-shift', buffered: true });
        setTimeout(() => resolve(accumulatedCLS), 500);
      });
    });

    console.log(`Mobile CLS: ${cls}`);
    expect(cls).toBe(0);
  });
});
