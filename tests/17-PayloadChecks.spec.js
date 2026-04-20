import { test, expect } from '@playwright/test';
import { email, password, link } from './data';


test.describe.serial('Pay Load check cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Audit Logs', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Auditing' }).nth(4).click();
        await page.getByRole('link', { name: 'Audit Logs' }).click();
        page.on('response', response => {
        if (response.status() === 404) {
            throw new Error(`404 detected: ${response.url()}`);
        }
        });
        await page.waitForTimeout(3000)  
    })

    test('Impersonation Logs', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Auditing' }).nth(4).click();
        await page.getByRole('link', { name: 'Impersonation Logs' }).click();
        page.on('response', response => {
        if (response.status() === 404) {
            throw new Error(`404 detected: ${response.url()}`);
        }
        });
        await page.waitForTimeout(3000)  
    })

    test('Invoices', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Billing' }).nth(5).click();
        await page.getByRole('link', { name: 'Invoices' }).first().click();
        page.on('response', response => {
        if (response.status() === 404) {
            throw new Error(`404 detected: ${response.url()}`);
        }
        });
        await page.waitForTimeout(3000)  
    })

    test('Clients invoices', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Billing' }).nth(5).click();
        await page.getByRole('link', { name: 'Clients Invoices' }).click();
        page.on('response', response => {
        if (response.status() === 404) {
            throw new Error(`404 detected: ${response.url()}`);
        }
        });
        await page.waitForTimeout(3000)  
    })

    test('Usage', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Billing' }).nth(5).click();
        await page.getByRole('link', { name: 'Usage' }).click();
        page.on('response', response => {
        if (response.status() === 404) {
            throw new Error(`404 detected: ${response.url()}`);
        }
        });
        await page.waitForTimeout(3000)  
    })

    test('Utilization', async ({ page }) => {
       await page.locator('div').filter({ hasText: 'Billing' }).nth(5).click();
        await page.getByRole('link', { name: 'Utilization' }).click();
        page.on('response', response => {
        if (response.status() === 404) {
            throw new Error(`404 detected: ${response.url()}`);
        }
        });
        await page.waitForTimeout(3000)  
    })
    
});

