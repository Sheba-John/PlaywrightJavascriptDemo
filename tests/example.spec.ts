import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';

test('has title', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link (POM)', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.clickGetStarted();
  // Expects page to have a heading with the name of Installation.
  await expect(home.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('get started link (POM helper)', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.clickGetStarted();
  await expect(home.installationHeading).toBeVisible();
});
