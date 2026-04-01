import { test, expect } from '@playwright/test';
import { email, password } from './data';


let randomID;
test.describe.serial('Cloud cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a cloud', async ({ page }) => {

        randomID = Math.floor(Math.random() * 100000).toString();
        
            await page.getByText('Manage').click();
            await page.getByRole('link', { name: 'Clouds' }).click();
            await page.getByRole('button', { name: ' ADD CLOUD' }).click();
            await page.locator('.cloud-type-wrapper').click();
            await page.getByRole('textbox', { name: 'Cloud Name *' }).click();
            await page.getByRole('textbox', { name: 'Cloud Name *' }).fill('testCloud'+randomID);
            await page.getByRole('textbox', { name: 'Contract ID *' }).click();
            await page.getByRole('textbox', { name: 'Contract ID *' }).fill('37847698');
            await page.locator('#currency-dropdown').click();
            await page.locator('#search-input').fill('usd');
            await page.locator('.dropdown-item:visible', { hasText: 'USD' }).click();
            await page.locator('#date-format-dropdown').click();
            await page.locator('#dropdown-items').getByText('DD/MM/YYYY').click();
            await page.getByRole('button', { name: 'SAVE' }).click();
            await page.getByRole('button', { name: 'Yes' }).click();
    
    });

    test('verify a cloud', async ({ page }) => {
        await page.getByText('Manage').click();
        await page.getByRole('link', { name: 'Clouds' }).click();
        const row = page.locator('tr', { hasText: randomID });
        await row.locator('.easy-checkbox label').click();
        
        //await page.getByRole('row', { name: 'testCloud IONOS 1234 Not' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Validate', { exact: true }).click();
        await page.getByRole('textbox', { name: 'Email *' }).click();
        await page.getByRole('textbox', { name: 'Email *' }).fill('testscript@illapa.cloud');
        await page.getByRole('textbox', { name: 'Password *' }).click();
        await page.getByRole('textbox', { name: 'Password *' }).fill('Junaid!');
        await page.getByRole('button', { name: 'VALIDATE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        
    
    });

    test('edit a cloud', async ({ page }) => {
        await page.getByText('Manage').click();
        await page.getByRole('link', { name: 'Clouds' }).click();
        const row = page.locator('tr', { hasText: randomID });
        await row.locator('.easy-checkbox label').click();
        
        //await page.getByRole('row', { name: 'testCloud IONOS 1234 Not' }).locator('label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        
        await page.locator('#currency-dropdown').click();
        await page.locator('#search-input').fill('aed');
        await page.locator('.dropdown-item:visible', { hasText: 'AED' }).click();
        await page.locator('#date-format-dropdown').click();
            

        await page.getByRole('button', { name: 'SAVE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
    
    });

    test('delete a cloud', async ({ page }) => {
            await page.getByText('Manage').click();
            await page.getByRole('link', { name: 'Clouds' }).click();
            const row = page.locator('tr', { hasText: randomID });
            await row.locator('.easy-checkbox label').click();
            await page.getByRole('button', { name: 'ACTIONS ' }).click();


            await page.getByText('Delete').click();
            await page.getByRole('button', { name: 'DELETE' }).click();
            await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
            await page.locator('#delete-confirmation-btn').click();
    
    });

    
});

