import { test, expect } from "@playwright/test";

test("Sanity check", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Blog/);
});
