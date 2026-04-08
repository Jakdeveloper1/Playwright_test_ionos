import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('Snapshot cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

   
    test('add a snapshot', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Infrastructure$/ }).nth(1).click();
        await page.getByRole('link', { name: 'Volumes' }).click();
        await page.getByRole('row', { name: 'test' }).locator('label').last().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Create Snapshot').click();
        await page.getByRole('textbox', { name: 'Description *' }).click();
        await page.getByRole('textbox', { name: 'Description *' }).fill('test');
        await page.getByRole('button', { name: 'CREATE SNAPSHOT' }).click();
        await page.waitForTimeout(5000)
        
    });



});

