import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('service plan cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a service plan', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Service Plans' }).click();
        await page.getByRole('button', { name: ' ADD SERVICE PLAN' }).click();
        await page.getByRole('textbox', { name: 'Plan Name *' }).click();
        await page.getByRole('textbox', { name: 'Plan Name *' }).fill('test plan');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
    
    });

    test('Edit a service plan', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Service Plans' }).click();
        await page.getByRole('row', { name: 'test plan' }).locator('label').first().click();
        //await page.locator('label').nth(1).click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('button', { name: 'ENTERPRISE' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('spinbutton', { name: 'RAM (GB) *' }).click();
        await page.getByRole('spinbutton', { name: 'RAM (GB) *' }).fill('6');
        await page.getByRole('button', { name: 'Next' }).click();
        const btn = page.getByRole('button', { name: 'Update Service Plan' });

        await expect(btn).toBeEnabled();  
        await btn.click();
    
    });

    test('delete a service plan', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Service Plans' }).click();
        await page.getByRole('row', { name: 'test plan' }).locator('label').first().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        //await page.locator('div').filter({ hasText: /^test plan2 cores, 6GB RAM, 80GB storage N\/A$/ }).nth(1).click();
        await page.getByRole('button', { name: 'Delete Plan' }).click();
    
    });

    
});

