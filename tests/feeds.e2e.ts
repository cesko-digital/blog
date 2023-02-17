import { test, expect } from "@playwright/test";

test("Article endpoint works", async ({ page }) => {
  const response = await page.request.get("/api/articles");
  await expect(response).toBeOK();
  expect(await response.json()).toBeTruthy();
});

test("RSS feed endpoint works", async ({ page }) => {
  const response = await page.request.get("/rss.xml");
  await expect(response).toBeOK();
});
