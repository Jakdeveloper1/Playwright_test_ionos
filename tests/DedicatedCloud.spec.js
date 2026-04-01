import { test, expect } from '@playwright/test';
import { email, password } from './data';

let randomName;
test.describe.serial('DC cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a DC', async ({ page }) => {
        const randomNumber = Math.floor(Math.random() * 100000);
        randomName = `test${randomNumber}`;

        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Datacenters' }).click();
        await page.getByRole('button', { name: ' ADD DATACENTER' }).click();
        await page.locator('div:nth-child(2) > .cloud-icon').click();
        await page.getByText('Choose CloudSelect from your').click();
        await page.locator('.cloud-icon').first().click();
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
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: ' Add NAT Gateway' }).click();
    });

  
    
    
});

