import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('Server cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a server', async ({ page }) => {
        await page.waitForTimeout(5000);
        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Servers' }).click();
        //await page.getByRole('button', { name: 'ADD SERVER' }).click();
        await page.waitForTimeout(3000);

        await page.getByRole('button', { name: 'ADD SERVER' }).click();

        try {
        await page.locator('.cloud-card', { hasText: 'test' }).waitFor({ timeout: 3000 });
        } catch (e) {
        //console.log("Retrying ADD SERVER...");
        //await page.getByRole('button', { name: 'ADD SERVER' }).click();
        await page.locator('#left-icon-btn').click()
        await page.locator('.cloud-card', { hasText: 'test' }).waitFor({ timeout: 5000 });
        }

        //await page.getByRole('button', { name: 'ADD SERVER' }).click();
        //await page.locator('.cloud-card').filter({ hasText: 'test' }).waitFor(); 
        await page.locator('.cloud-card', { hasText: 'testCloud' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        //await page.locator('.datacenter-icon', { hasText: 'test' }).last().click();
        await page.locator('.datacenter-icon').last().click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'ISO Installer' }).click();
        //await page.pause();
        await page.locator('.image-card').first().click();
        //await page.getByText('Microsoft-SQL-2016').first().click();
        await page.getByRole('button', { name: 'Next' }).click();
        //await page.getByText('vCPU:').first().click();
        await page.getByRole('button', { name: 'Custom Size' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        //await page.getByText('CloudtestCloud').click();
        await page.getByRole('textbox', { name: 'my-server-' }).click();
        await page.getByRole('textbox', { name: 'my-server-' }).fill('test Server');
        await page.getByRole('button', { name: 'Deploy Server' }).click();
        //await page.waitForTimeout(30000);
    
    });

//Note: It is better to run edit and delete server after few seconds as the website few seconds to create the server.
    test('edit a server', async ({ page }) => {
        //await page.waitForTimeout(3000)
        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Servers' }).click();
        await page.getByRole('row', { name: 'test'}).locator('label').last().click();
            
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('slider').fill('15');
        await page.getByRole('button', { name: 'Service Plans' }).click();
        await page.getByText('SmallvCPU: 1RAM: 2 GBStorage').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Add NIC' }).click();
        //await page.getByRole('textbox', { name: 'eth0' }).click();
        // await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        // await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        // await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        // await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        // await page.getByRole('textbox', { name: 'eth0' }).press('ArrowLeft');
        // await page.getByRole('textbox', { name: 'eth0' }).fill('test eth0');
        await page.locator('.slider').last().click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Update' }).click(); 
    
    });

    // test('delete a server', async ({ page }) => {
    //     await page.getByText('Resources').click();
    //     await page.getByText('Infrastructure', { exact: true }).click();
    //     await page.getByRole('link', { name: 'Servers' }).click();
        
    //         await page.getByRole('row', { name: 'test server testCloud' }).locator('label').last().click();
    //         await page.getByRole('button', { name: 'ACTIONS ' }).click();
    //         await page.getByText('Delete').click();
    //         await page.getByRole('button', { name: 'DELETE' }).click();
    //         await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
    //         await page.locator('#delete-confirmation-btn').click();
    
    // });

    
});

