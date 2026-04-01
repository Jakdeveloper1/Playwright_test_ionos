import { test, expect } from '@playwright/test';


test.describe.serial('Server cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill('test@user.co.uk');
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('Junaid!');
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test.only('add a server', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Servers' }).click();
        //await page.getByRole('button', { name: 'ADD SERVER' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'ADD SERVER' }).click(); 
        await page.locator('.cloud-card', { hasText: 'testCloud25052' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('div:nth-child(2) > .datacenter-icon').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'ISO Installer' }).click();
        await page.getByText('Microsoft-SQL-2016-full-trial-english.isoCDROMIONOS • GB United Kingdom -').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('vCPU:').first().click();
        await page.getByRole('button', { name: 'Custom Size' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('CloudtestCloud25052').click();
        await page.getByText('CloudtestCloud25052').click();
        await page.getByRole('textbox', { name: 'my-server-' }).click();
        await page.getByRole('textbox', { name: 'my-server-' }).fill('test Server');
        await page.getByRole('button', { name: 'Deploy Server' }).click();
    
    });

//Note: It is better to run edit and delete server after few seconds as the website few seconds to create the server.
    test('edit a server', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Servers' }).click();
        await page.getByRole('row', { name: 'test server testCloud25052' }).locator('label').click();
            
       await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('slider').fill('15');
        await page.getByRole('button', { name: 'Service Plans' }).click();
        await page.getByText('SmallvCPU: 1RAM: 2 GBStorage').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Add NIC' }).click();
        await page.getByRole('textbox', { name: 'eth0' }).click();
        await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        await page.getByRole('textbox', { name: 'eth0' }).fill('test eth0');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Update' }).click(); 
    
    });

    test('delete a server', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Servers' }).click();
        
            await page.getByRole('row', { name: 'test server testCloud25052' }).locator('label').click();
            await page.getByRole('button', { name: 'ACTIONS ' }).click();
            await page.getByText('Delete').click();
            await page.getByRole('button', { name: 'DELETE' }).click();
            await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
            await page.locator('#delete-confirmation-btn').click();
    
    });

    
});

