from playwright.sync_api import sync_playwright

def verify_narrative(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(3000)

    # 1. Verify Hero Text
    line1 = page.get_by_text("With the blessings of the divine")
    line2 = page.get_by_text("Two souls unite in sacred matrimony")
    if not line1.is_visible() or not line2.is_visible():
        print("Hero text not visible")

    page.screenshot(path="verification/stage3_hero.png")

    # 2. Verify Mantra
    page.evaluate("window.scrollTo(0, 800)")
    page.wait_for_timeout(1000)
    # Check for hindi text part
    # We might need to match partial text or use an ID if hindi encoding is tricky, but lets try
    # Just snapshotting for visual verification is key
    page.screenshot(path="verification/stage3_mantra.png")

    # 3. Verify Love Story (Grid)
    page.evaluate("window.scrollTo(0, 1600)")
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/stage3_lovestory.png")

    # 4. Verify Family
    page.evaluate("window.scrollTo(0, 3000)")
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/stage3_family.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        try:
            verify_narrative(page)
        finally:
            browser.close()
