import { test, expect } from '@playwright/test';

let randomEmail;
test.describe.serial('User cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto('https://opsmgr.illapa.cloud/4/organisation/login');
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill('test@user.co.uk');
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('Junaid!');
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add a user', async ({ page }) => {

    const randomNumber = Math.floor(Math.random() * 100000);
    randomEmail = `test${randomNumber}@gmail.com`;
    
    await page.getByRole('link', { name: ' Users' }).click();
    await page.getByRole('button', { name: ' ADD USER' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).click();
    await page.getByRole('textbox', { name: 'First Name *' }).fill('test user 1');
    await page.getByRole('textbox', { name: 'First Name *' }).press('Tab');
    await page.getByRole('textbox', { name: 'Last Name *' }).fill('testing');
    await page.getByRole('textbox', { name: 'Last Name *' }).press('Tab');
    //await page.getByRole('textbox', { name: 'Email *' }).fill('test11@gmail.com');
    await page.getByRole('textbox', { name: 'Email *' }).fill(randomEmail);
    await page.getByRole('textbox', { name: 'Email *' }).press('Tab');
    await page.locator('.dropdown-toggle').first().click();
    await page.getByText('+1', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Mobile *' }).click();
    await page.getByRole('textbox', { name: 'Mobile *' }).fill('55555555');
    await page.locator('.form-row > div > .relative > .dropdown-toggle').click();
    await page.locator('#dropdown-items').getByText('User', { exact: true }).click();
    await page.getByRole('button', { name: 'SAVE' }).click(); 
    await page.getByRole('button', { name: 'Yes' }).click();

    });

    test('Edit a user', async ({ page }) => {
        await page.getByRole('link', { name: ' Users' }).click();
        //await page.locator('tr:nth-child(6) > .shadow > .easy-checkbox > label').click();
        const row = page.locator('tr', { hasText: randomEmail });
        await row.locator('.easy-checkbox label').click();

        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.locator('.dropdown-toggle').click();
        await page.locator('.checkmark').first().click();
        await page.getByRole('button', { name: 'APPLY' }).click();
        await page.getByRole('button', { name: 'SAVE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
     });

      test('delete a user', async ({ page }) => {
    await page.getByRole('link', { name: ' Users' }).click();
    //await page.locator('tr:nth-child(7) > .shadow > .easy-checkbox > label').click();
    const row = page.locator('tr', { hasText: randomEmail });
    await row.locator('.easy-checkbox label').click();
    
    await page.getByRole('button', { name: 'ACTIONS ' }).click();
    await page.getByText('Delete').click();
    await page.getByRole('button', { name: 'DELETE' }).click();
    await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
    await page.locator('#delete-confirmation-btn').click();
    });
});

