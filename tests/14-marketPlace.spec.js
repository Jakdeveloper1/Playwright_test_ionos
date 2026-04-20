import { test, expect } from '@playwright/test';
import { email, password, link } from './data';


test.describe.serial('Market Place cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Upload Custom Image', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Marketplace' }).click();
        await page.locator('label').nth(1).click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Manage FTP').click();
        await page.getByRole('checkbox', { name: 'test' }).check();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('checkbox', { name: 'Paris FR-PAR-' }).check();
        await page.getByRole('button', { name: 'Install Image' }).click();
        await page.waitForTimeout(5000)
    })

    test('Delete Custom Image', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Marketplace' }).click();
        await page.locator('label').nth(1).click();
        await page.locator('.slider').first().click();
        await page.waitForTimeout(3000)
    })

    
});

