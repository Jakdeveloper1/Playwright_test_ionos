import { test, expect } from '@playwright/test';


test.describe.serial('Template cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill('test@user.co.uk');
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('Junaid!');
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a Template', async ({ page }) => {
        
    
    });

    test('Attach a Template', async ({ page }) => {
        
    
    });

    test('delete a Template', async ({ page }) => {
        
    
    });

    
});

