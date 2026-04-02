import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('Firewall cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a Firewall', async ({ page }) => {

        
         await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Security$/ }).nth(1).click();
        await page.getByRole('link', { name: 'Firewall Rules' }).click();
        await page.getByRole('button', { name: ' ADD FIREWALL RULE' }).click();
        await page.getByText('testCloud').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('test').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('test ServerVCPURUNNING').first().click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('eth').last().click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('textbox', { name: 'my-firewall-rule' }).click();
        await page.getByRole('textbox', { name: 'my-firewall-rule' }).fill('test rules');
        await page.locator('#type-dropdown').click();
        await page.locator('.ml-auto > .icon > .bi').first().click();
        await page.locator('#type-dropdown').click();
        await page.getByText('INGRESS').click();
        await page.locator('#protocol-dropdown').click();
        await page.getByText('TCP').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Create' }).click();
    
    });

    test('Edit a Firewall', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Security$/ }).nth(1).click();
        await page.getByRole('link', { name: 'Firewall Rules' }).click();
        await page.getByRole('row', { name: 'test ' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.locator('#protocol-dropdown').click();
        await page.getByText('UDP').click();
        await page.getByRole('button', { name: 'UPDATE' }).click();
    
    });

    test('delete a Firewall', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Security$/ }).nth(1).click();
        await page.getByRole('link', { name: 'Firewall Rules' }).click();
        await page.getByRole('row', { name: 'test ' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE FIREWALL RULE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.getByRole('button', { name: 'DELETE', exact: true }).click();    
    
    });

    
});

