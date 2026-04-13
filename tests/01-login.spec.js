import { test, expect } from '@playwright/test';
import { email, password,link } from './data';

test('login', async ({ page }) => {
  await page.goto(link);
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).fill(email);
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

await expect(page.locator('h2')).toHaveText('Dashboard', { timeout: 30000 });
});