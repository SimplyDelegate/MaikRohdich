import { expect, test } from "@playwright/test";

test("loads the homepage shell and primary contact action", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Maik Rohdich Garten- und Landschaftsbau/);
  await expect(page.getByTestId("site-header")).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Hauptnavigation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Maik Rohdich Garten- und Landschaftsbau",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Anrufen/ }).first(),
  ).toBeVisible();
});
