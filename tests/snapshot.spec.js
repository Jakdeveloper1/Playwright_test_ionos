import { test, expect } from '@playwright/test';


test.describe.serial('Snapshot cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill('test@user.co.uk');
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('Junaid!');
    await page.getByRole('button', { name: 'Login' }).click();
    });

    //Note: Attach and delete use cases are handled in same test

    test('add and delete a snapshot', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Infrastructure$/ }).nth(1).click();
        await page.getByRole('link', { name: 'Volumes' }).click();
        await page.getByRole('row', { name: 'test server-storage — test' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Create Snapshot').click();
        await page.getByRole('textbox', { name: 'Description *' }).click();
        await page.getByRole('textbox', { name: 'Description *' }).fill('test');
        await page.getByRole('button', { name: 'CREATE SNAPSHOT' }).click();
        await page.getByRole('link', { name: 'Snapshots' }).click();
        await page.getByRole('row', { name: 'test ' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
    
    });

    
});

