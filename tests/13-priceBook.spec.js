import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('Price Book cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Duplicate, Edit, Assign and Delete a price book', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Billing' }).nth(5).click();
        await page.getByRole('link', { name: 'Pricebooks' }).click();
        await page.getByRole('row', { name: 'Toms Pricebook Extreme' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Duplicate').click();
        //edit
        await page.getByRole('row', { name: 'Toms Pricebook Copy Extreme' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('textbox', { name: 'Name' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('Toms Pricebook original');
        await page.getByRole('button', { name: 'Save' }).click();
        //assign
        await page.getByRole('row', { name: 'Toms Pricebook original' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Assign To').click();
        await page.locator('div').filter({ hasText: /^demo$/ }).first().click();
        await page.getByRole('button', { name: 'Assign' }).click();
        //delete
        await page.getByRole('row', { name: 'Toms Pricebook original' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'Delete' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.getByRole('button', { name: 'DELETE', exact: true }).click();
        });
    
    


    
});

