import { test, expect } from '@playwright/test';
import { email, password, cloud_email,link } from './data';


//let randomID;
test.describe.serial('Cloud cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a cloud', async ({ page }) => {

       // randomID = Math.floor(Math.random() * 100000).toString();
            await page.waitForTimeout(2000)
            await page.getByText('Manage').click();
            await page.getByRole('link', { name: 'Clouds' }).click();
            await page.getByRole('button', { name: ' ADD CLOUD' }).click();
            await page.locator('.cloud-type-wrapper').click();
            await page.getByRole('textbox', { name: 'Cloud Name *' }).click();
            await page.getByRole('textbox', { name: 'Cloud Name *' }).fill('testCloud1000');
            await page.getByRole('textbox', { name: 'Contract ID *' }).click();
            await page.getByRole('textbox', { name: 'Contract ID *' }).fill('37847698');
            await page.locator('#currency-dropdown').click();
            await page.locator('#search-input').fill('usd');
            await page.locator('.dropdown-item:visible', { hasText: 'USD' }).click();
            await page.locator('#date-format-dropdown').click();
            await page.locator('#dropdown-items').getByText('DD/MM/YYYY').click();
            await page.getByRole('button', { name: 'SAVE' }).click();
            await page.getByRole('button', { name: 'Yes' }).click();
            await page.waitForTimeout(3000);
    
    });

    test('verify a cloud', async ({ page }) => {
        await page.waitForTimeout(3000)
        await page.locator('div').filter({ hasText: 'Manage' }).nth(5).click();
        await page.getByRole('link', { name: 'Clouds' }).click();
        //const row = page.locator('tr', { hasText: randomID });
        await page.getByRole('row', { name: 'test' }).locator('label').last().click();
         await page.getByRole('button', { name: 'ACTIONS ' }).click();
         await page.getByText('Validate').first().click();
        

        await page.getByRole('textbox', { name: 'Email *' }).click();
        await page.getByRole('textbox', { name: 'Email *' }).fill(cloud_email);
        await page.getByRole('textbox', { name: 'Password *' }).click();
        await page.getByRole('textbox', { name: 'Password *' }).fill(password);
        await page.getByRole('button', { name: 'VALIDATE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(5000);
    
    });

    test('edit a cloud', async ({ page }) => {
        await page.waitForTimeout(3000)
        await page.locator('.nav-link', {hasText:"Manage"}).click();
        await page.getByRole('link', { name: 'Clouds' }).click();
        const row = page.locator('tr', { hasText: '1000' });
        await row.locator('.easy-checkbox').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        
        await page.locator('#currency-dropdown').click();
        await page.locator('#search-input').fill('aed');
        await page.locator('.dropdown-item:visible', { hasText: 'AED' }).click();
        await page.locator('#date-format-dropdown').click();
            

        await page.getByRole('button', { name: 'SAVE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(3000)
    });


    
});

