import { test, expect } from "@playwright/test";

test("form generation and submission", async ({ page }) => {
  await page.goto("/");
  const jsonEditor = page.locator("textarea");
  const schema = JSON.stringify({
    formTitle: "Test Form",
    fields: [{ id: "name", type: "text", label: "Name", required: true }],
  });

  await jsonEditor.fill(schema);
  await expect(page.locator("form")).toBeVisible();
  await page.fill("input[name=name]", "John Doe");
  await page.click("button[type=submit]");
  await expect(page.locator("text=Form Submitted")).toBeVisible();
});
