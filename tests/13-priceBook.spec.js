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
        await page.getByRole('row', { name: 'Jason Pricebook' }).locator('label').last().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Duplicate').click();
        
        //edit
        await page.waitForTimeout(5000)
        await page.getByRole('row', { name: 'Jason Pricebook Copy' }).locator('label').first().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('textbox', { name: 'Name' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('Jason Pricebook original');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(3000)
        //assign
        await page.getByRole('row', { name: 'Jason Pricebook original' }).locator('label').first().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Assign To').click();
        await page.waitForTimeout(3000)
        await page.locator('div').filter({ hasText: 'demo' }).first().click();
        await page.waitForTimeout(5000)
        await page.getByRole('button', { name: 'Assign' }).click();
        await page.waitForTimeout(3000)
        //delete
        await page.getByRole('row', { name: 'Jason Pricebook original' }).locator('label').first().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        //await page.getByRole('button', { name: 'DELETE', exact: true }).click();
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
        });
    
    


    
});

