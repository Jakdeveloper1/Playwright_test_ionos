import { test, expect } from '@playwright/test';
import { email, password,link } from './data';


test.describe.serial('Server cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
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
        await page.waitForTimeout(3000);

        await page.getByRole('button', { name: 'ADD SERVER' }).click();

        try {
        await page.locator('.cloud-card', { hasText: 'test' }).waitFor({ timeout: 3000 });
        } catch (e) {
        await page.locator('#left-icon-btn').click()
        await page.locator('.cloud-card', { hasText: 'test' }).waitFor({ timeout: 5000 });
        }

        await page.locator('.cloud-card', { hasText: 'testCloud' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.locator('.datacenter-icon').last().click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'ISO Installer' }).click();
        await page.locator('.image-card').first().click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Custom Size' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        //await page.getByRole('button', { name: ' Add Network Interface ' }).click();
        
        //await page.locator('.dropdown-toggle').first().click();
        //await page.locator('.dropdown-item').last().click();
       // await page.getByRole('button', { name: 'Save' }).click();
        
        await page.getByRole('button', { name: 'Next' }).click();
        
        await page.getByRole('textbox', { name: 'my-server-' }).click();
        await page.getByRole('textbox', { name: 'my-server-' }).fill('test Server');
        await page.getByRole('button', { name: 'Deploy Server' }).click();
        
        //await page.locator('.status-badge__text', { hasText: 'RUNNING' }).waitFor({ timeout: 30000 });
       await page.waitForTimeout(5000)
       //await expect(page.locator('.status-badge__text')).toHaveText('RUNNING', {timeout:15000})
    });

    test('edit a server', async ({ page }) => {
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
        await page.locator('.slider').last().click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Update' }).click(); 
         await page.waitForTimeout(5000)
    });

    
    
});

