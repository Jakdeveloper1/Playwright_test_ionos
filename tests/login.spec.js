import { test, expect } from '@playwright/test';
import { email, password } from './data';

test('login', async ({ page }) => {
  await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
  await page.waitForTimeout(50000);
  await page.getByRole('textbox', { name: 'Username *' }).click();
  await page.getByRole('textbox', { name: 'Username *' }).fill(email);
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

await expect(page.locator('h2')).toHaveText('Dashboard', { timeout: 30000 });
});