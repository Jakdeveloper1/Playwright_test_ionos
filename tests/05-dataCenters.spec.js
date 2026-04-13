import { test, expect } from '@playwright/test';
import { email, password, link } from './data';

let randomName;
test.describe.serial('DC cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a Data Center', async ({ page }) => {
        const randomNumber = Math.floor(Math.random() * 100000);
        randomName = `test${randomNumber}`;

        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Datacenters' }).click();
        await page.getByRole('button', { name: ' ADD DATACENTER' }).click();
        await page.getByText('test').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('textbox', { name: 'Enter datacenter name' }).click();
        await page.getByRole('textbox', { name: 'Enter datacenter name' }).fill(randomName);
        await page.locator('div').filter({ hasText: /^Select location$/ }).nth(2).click();
        await page.getByText('berlin').click();
        await page.getByRole('textbox', { name: 'Enter datacenter description' }).click();
        await page.getByRole('textbox', { name: 'Enter datacenter description' }).fill('this is a test datacenter');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: ' Add LAN' }).click();
        await page.getByRole('textbox', { name: 'Enter LAN name' }).click();
        await page.getByRole('textbox', { name: 'Enter LAN name' }).fill('test LAN');
        await page.locator('.slider').click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'CREATE' }).click();
        await page.waitForTimeout(5000)
    });

    test('edit a DC', async ({ page }) => {
            await page.waitForTimeout(3000)
            await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
            await page.locator('div').filter({ hasText: /^Infrastructure$/ }).nth(1).click();
            await page.getByRole('link', { name: 'Datacenters' }).click();
            await page.getByRole('row', { name: 'test' }).locator('label').last().click();
            await page.getByRole('button', { name: 'ACTIONS ' }).click();
            await page.getByText('Edit').click();
            await page.getByRole('button', { name: 'Next' }).click();
            await page.getByRole('textbox', { name: 'Enter datacenter description' }).click();
            await page.getByRole('textbox', { name: 'Enter datacenter description' }).fill('testing service');
            await page.getByRole('button', { name: 'Next' }).click();
            await page.getByRole('button', { name: 'Next' }).click();
            await page.getByRole('button', { name: 'Update' }).click();
            await page.waitForTimeout(3000)
                })
     
    
});

