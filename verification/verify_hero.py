from playwright.sync_api import sync_playwright

def verify_hero(page):
    # 1. Go to localhost:3000
    page.goto("http://localhost:3000")

    # 2. Wait for animations to settle (Hero takes ~1-2s)
    page.wait_for_timeout(3000)

    # 3. Assert Groom and Bride names are visible
    # Use exact=True to avoid matching footer text
    groom = page.get_by_text("Himanshu", exact=True)
    bride = page.get_by_text("Anjali", exact=True)

    if not groom.is_visible():
        print("Groom name not visible!")
    if not bride.is_visible():
        print("Bride name not visible!")

    # 4. Screenshot Hero
    page.screenshot(path="verification/hero.png")

    # 5. Scroll to Love Story
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000) # Wait for fade up
    page.screenshot(path="verification/lovestory.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Desktop view
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        try:
            verify_hero(page)
        finally:
            browser.close()
