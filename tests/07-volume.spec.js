import { test, expect } from '@playwright/test';
import { email, password } from './data';


test.describe.serial('Volume cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add and attach a volume', async ({ page }) => {
         await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
        await page.getByText('Infrastructure', { exact: true }).click();
        await page.getByRole('link', { name: 'Volumes' }).click();
        await page.getByRole('button', { name: ' ADD VOLUME' }).click();
        await page.getByText('testCloud').click();
        await page.getByRole('button', { name: 'Next' }).click();
        await page.waitForTimeout(5000)
        
        try{
        await page.locator({ hasText: 'test' }).waitFor({ timeout: 3000 });
        
            await page.getByText('test').last().click();
            
        }
        catch(e)
        {
                await page.waitForTimeout(5000)
                await page.getByText('test').last().click();
        }
        
        
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByRole('textbox', { name: 'my-volume-' }).click();
        await page.getByRole('textbox', { name: 'my-volume-' }).fill('test volume');
        await page.getByRole('button', { name: 'Next' }).click();
        //await page.locator('.switch').click();
        //await page.waitForTimeout(3000)
        //try{
        //await page.locator('span').filter({ hasText: 'Select Server' }).click();
        //await page.locator('.switch').click();
        //await page.locator('span').filter({ hasText: 'Select Server' }).click();
        //}
        //catch(e)
        //{
            
            //await page.waitForTimeout(2000)
            //await page.locator('.switch').click();
           // await page.waitForTimeout(5000)
         //   await page.locator('.switch').click();
            
        //}
       // await page.getByText('test Server', { exact: true }).first().click();
        //await page.waitForTimeout(3000)
        await page.getByRole('button', { name: 'CREATE' }).click();
    
    });

//Note: Run Delete a volume, if you do not need to run the snapshot case.
    // test('delete a volume', async ({ page }) => {
    //     await page.locator('div').filter({ hasText: 'Resources' }).nth(5).click();
    //     await page.getByText('Infrastructure', { exact: true }).click();
    //     await page.getByRole('link', { name: 'Volumes' }).click();
    //     await page.getByRole('row', { name: 'test volume' }).locator('label').click();
    //     await page.getByRole('button', { name: 'ACTIONS ' }).click();
    //     await page.getByText('Delete').click();
    //     await page.getByRole('button', { name: 'DELETE' }).click();
    //     await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
    //     await page.locator('#delete-confirmation-btn').click();
            
    // });

    
});

