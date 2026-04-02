import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('Security cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a Security group', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Security').click();
        await page.getByRole('link', { name: 'Security Groups' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'ADD SECURITY GROUP' }).click();
        await page.getByText('test').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('div').filter({ hasText: /^test/ }).nth(1).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('textbox', { name: 'Enter security group name' }).click();
        await page.getByRole('textbox', { name: 'Enter security group name' }).fill('test security group');
        await page.getByRole('textbox', { name: 'Enter description (optional)' }).click();
        await page.getByRole('textbox', { name: 'Enter description (optional)' }).fill('test group');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Create' }).click();
    
    });

    test('Edit a Security group', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Security').click();
        await page.getByRole('link', { name: 'Security Groups' }).click();
        await page.getByRole('row', { name: 'test ' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('textbox', { name: 'Description' }).click();
        await page.getByRole('textbox', { name: 'Description' }).fill('test group description update');
        await page.getByRole('button', { name: 'SAVE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
    
    });

    test('delete a Security group', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Security').click();
        await page.getByRole('link', { name: 'Security Groups' }).click();
         await page.getByRole('row', { name: 'test ' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
    
    });

    
});

