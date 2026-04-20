import { test, expect } from '@playwright/test';
import { email, password, link } from './data';


test.describe.serial('Template cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Add a template', async ({ page }) => {
        
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Templates' }).click();
        await page.getByRole('button', { name: ' CREATE TEMPLATE' }).click();
        await page.getByRole('textbox', { name: 'Template Name *' }).click();
        await page.getByRole('textbox', { name: 'Template Name *' }).fill('test');
        await page.getByRole('textbox', { name: 'Description' }).click();
        await page.getByRole('textbox', { name: 'Description' }).fill('test');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: ' Add Server' }).click();
        await page.getByRole('button', { name: 'ISO Installer' }).click();
        await page.getByText('Microsoft-SQL-2016-full-trial-english.isoCDROMIONOS • 10 region(s) Min: 2.54 GB').first().click();
        await page.locator('button').filter({ hasText: /^Next$/ }).click();
        await page.getByText('Small').click();
        await page.locator('button').filter({ hasText: /^Next$/ }).click();
        await page.getByRole('button', { name: 'Add to Template' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: ' Add Firewall' }).click();
        await page.getByRole('textbox', { name: 'Firewall Name *' }).click();
        await page.getByRole('textbox', { name: 'Firewall Name *' }).fill('test firewall');
        await page.locator('#firewall-template').click();
        await page.getByText('Custom - Define your own rules').click();
        await page.getByRole('textbox', { name: 'Rule Name' }).click();
        await page.getByRole('textbox', { name: 'Rule Name' }).fill('test');
        await page.getByRole('spinbutton', { name: 'Port Start' }).click();
        await page.getByRole('spinbutton', { name: 'Port Start' }).fill('80');
        await page.getByRole('spinbutton', { name: 'Port End' }).click();
        await page.getByRole('spinbutton', { name: 'Port End' }).fill('8080');
        await page.getByRole('button', { name: 'Add Firewall', exact: true }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: ' Add Load Balancer' }).click();
        await page.getByRole('textbox', { name: 'Load Balancer Name *' }).click();
        await page.getByRole('textbox', { name: 'Load Balancer Name *' }).fill('test load balancer');
        await page.getByText('Application Load BalancerLayer 7 load balancer with advanced routing').click();
        await page.getByRole('button', { name: 'Add Load Balancer', exact: true }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: ' Add LAN' }).click();
        await page.getByRole('textbox', { name: 'LAN Name' }).click();
        await page.getByRole('textbox', { name: 'LAN Name' }).fill('test LAN');
        await page.locator('.switch').click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Create', exact: true }).click();
        await page.waitForTimeout(5000)
    })

    test('Edit a template', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Templates' }).click();
        await page.locator('label').nth(1).click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('textbox', { name: 'Template Name *' }).click();
        await page.getByRole('textbox', { name: 'Template Name *' }).fill('test1');
        await page.getByRole('textbox', { name: 'Description' }).click();
        await page.getByRole('textbox', { name: 'Description' }).fill('test edit');
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
        await page.getByRole('button', { name: 'ISO Installer' }).click();
        await page.getByText('Ubuntu-22.04-live-server-amd64.isoCDROMIONOS • 10 region(s) Min: 1.37 GB HDD').first().click();
        await page.locator('button').filter({ hasText: /^Next$/ }).click();
        await page.locator('button').filter({ hasText: /^Next$/ }).click();
        await page.getByRole('button', { name: 'Add to Template' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('button', { name: 'Update' }).click();

        
        
        await page.waitForTimeout(3000)
    })

     test('Share a template', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Templates' }).click();
        await page.locator('label').nth(1).click();
        await page.locator('.switch-slider').click();
        
        await page.waitForTimeout(3000)
    })

     test('Delete a template', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Settings' }).nth(5).click();
        await page.getByRole('link', { name: 'Templates' }).click();
        await page.locator('label').nth(1).click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    })



   

    
});

