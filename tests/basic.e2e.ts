import { test, expect } from "@playwright/test";

test("Sanity check", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Blog/);
});

// https://github.com/cesko-digital/blog/issues/473
test.fixme("Not found page", async ({ page }) => {
  const response = await page.request.get("/does_not_exist");
  expect(response.status()).toBe(404);
  expect(await response.text()).not.toMatch(/NEXT_NOT_FOUND/);
});
