import { test, expect } from '@playwright/test';

test.describe('E2E Validation for Portfolio Demo', () => {
  test('should verify main landing page loads correctly', async ({ page }) => {
    // This is a placeholder test. In a real scenario, this would test actual business flows.
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('should verify get started link works', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
