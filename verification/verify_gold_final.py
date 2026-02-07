
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.set_viewport_size({"width": 1920, "height": 1080})

        try:
            await page.goto("http://localhost:3000", wait_until="networkidle")
        except Exception as e:
            print(f"Error navigating: {e}")
            await browser.close()
            return

        # Screenshot Hero Section
        hero_section = page.locator('section').first
        await hero_section.screenshot(path="verification/hero_gold_final.png")

        # Scroll to Mantra Section and Screenshot
        first_gold_h2 = page.locator('h2.text-metallic-gold').first
        await first_gold_h2.scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/mantra_gold_final.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
