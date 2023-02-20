import { test, expect } from "@playwright/test";

const endpoints = {
  "/api/articles": "application/json",
  "/rss.xml": "application/rss+xml",
};

for (const [endpoint, contentType] of Object.entries(endpoints)) {
  test(`Endpoint works: ${endpoint}`, async ({ page }) => {
    const response = await page.request.get(endpoint);
    expect(response).toBeOK();
    expect(response.headers()["content-type"]).toEqual(contentType);
    if (contentType === "application/json") {
      expect(await response.json()).toBeTruthy();
    }
  });
}
