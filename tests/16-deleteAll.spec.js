
import { test, expect } from '@playwright/test';
import { email, password, link } from './data';


test.describe.serial('Delete cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });


    test('delete a snapshot', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Infrastructure$/ }).nth(1).click();    
        //await page.waitForTimeout(3000)
        await page.getByRole('link', { name: 'Snapshots' }).click();
        await page.getByRole('row', { name: 'test ' }).locator('label').last().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    
    });


    test('delete a volume', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Volumes' }).click();
        await page.getByRole('row', { name: 'test' }).locator('label').last().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    });

    test('delete a server', async ({ page }) => {
        await page.getByText('Resources').click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Servers' }).click();
        
            await page.getByRole('row', { name: 'test' }).locator('label').last().click();
            await page.getByRole('button', { name: 'ACTIONS ' }).click();
            await page.getByText('Delete').click();
            await page.getByRole('button', { name: 'DELETE' }).click();
            await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
            await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    });

     test('delete a DC', async ({ page }) => {
            await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.locator('div').filter({ hasText: /^Infrastructure$/ }).nth(1).click();
        await page.getByRole('link', { name: 'Datacenters' }).click();
        await page.getByRole('row', { name: 'test' }).locator('label').last().click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    })


test('delete a cloud', async ({ page }) => {
            await page.getByText('Manage').click();
            await page.getByRole('link', { name: 'Clouds' }).click();
            const row = page.locator('tr', { hasText: '1000' });
            await row.locator('.easy-checkbox label').click();
            await page.getByRole('button', { name: 'ACTIONS ' }).click();


            await page.getByText('Delete').click();
            await page.getByRole('button', { name: 'DELETE' }).click();
            await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
            await page.locator('#delete-confirmation-btn').click();
            await page.waitForTimeout(3000)
    
    })


    



    



    


        
    

    

        
});