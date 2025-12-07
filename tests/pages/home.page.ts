import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStarted: Locator;
  readonly installationHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStarted = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.getStarted.click();
  }

  async isInstallationHeadingVisible() {
    return await this.installationHeading.isVisible();
  }
}
