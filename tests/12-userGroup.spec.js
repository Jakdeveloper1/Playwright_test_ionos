import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('User group cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a User group', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'User Groups' }).click();
        await page.getByRole('button', { name: ' ADD ROLE' }).click();
        await page.getByRole('textbox', { name: 'Role Name *' }).click();
        await page.getByRole('textbox', { name: 'Role Name *' }).fill('test rules');
        await page.getByRole('button', { name: 'Select All' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(3000)
    
    });

    test('Edit a User group', async ({ page }) => {
        await page.locator('.nav-link', {hasText:"Settings"}).click();
        await page.getByRole('link', { name: 'User Groups' }).click();
        
        await page.getByRole('textbox', { name: 'Search' }).click();
        await page.getByRole('textbox', { name: 'Search' }).fill('test');
        await page.locator('tr:nth-child(9) > .shadow > .easy-checkbox > label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.locator('.slider').first().click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(3000)    
    
    });

    test('delete a User group', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'User Groups' }).click();
        await page.getByRole('textbox', { name: 'Search' }).click();
        await page.getByRole('textbox', { name: 'Search' }).fill('test');
        await page.locator('tr:nth-child(9) > .shadow > .easy-checkbox > label').click();
        
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    
    });

    
});

