import { test, expect } from '@playwright/test';
import { email, password, link } from './data';

let randomEmail;
test.describe.serial('Account cases', () => {
    test.beforeEach(async ({ page }) => {
    await page.goto(link);
    await page.getByRole('textbox', { name: 'Username *' }).click();
    await page.getByRole('textbox', { name: 'Username *' }).fill(email);
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    });

    test('add an account', async ({ page }) => {

        const randomNumber = Math.floor(Math.random() * 100000);
    randomEmail = `test${randomNumber}@gmail.com`;

  await page.locator('#quick-add-btn').click();
  await page.getByText('Client', { exact: true }).click();
  await page.locator('#distributor-user-role-dropdown').click();
  await page.getByText('ionos@gmail.com').click();
  await page.locator('#account-name-input').fill('jak'+randomEmail);
  await page.locator('#account-country-dropdown').click();
  await page.getByText('Afghanistan').click();
  await page.locator('.area-code-dropdown > .relative > .dropdown-toggle').click();
  await page.getByText('+1', { exact: true }).click();
  await page.locator('#account-telephone-input').fill('6666666');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('kaj'+randomEmail);
  await page.getByRole('textbox', { name: 'First Name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('khan1');
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('jak1');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill(randomEmail);
  await page.getByRole('textbox', { name: 'Email *' }).press('Tab');
  await page.locator('.dropdown-toggle').click();
  await page.getByText('+1', { exact: true }).click();


  await page.getByRole('textbox', { name: 'Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Mobile *' }).fill('6666666666');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 *' }).fill('isb');
  await page.getByRole('textbox', { name: 'State/County *' }).click();
  await page.getByRole('textbox', { name: 'State/County *' }).fill('pak');
  await page.getByRole('textbox', { name: 'Zip/Postal Code *' }).click();
  await page.getByRole('textbox', { name: 'Zip/Postal Code *' }).fill('44000');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'VAT Number *' }).click();
  await page.getByRole('textbox', { name: 'VAT Number *' }).fill('5500');
  await page.locator('#account-currency-dropdown').click();
  await page.getByRole('textbox', { name: 'Search' }).fill('p');
  await page.getByRole('textbox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Search' }).fill('us');
  await page.getByText('USD').click();
  await page.locator('#timezones-dropdown').click();
  await await page.waitForTimeout(2000);
 await page.getByText('GMT+1').first().click();

  await page.getByRole('button', { name: 'Next' }).click();
  
  await page.getByRole('button', { name: 'SAVE' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.waitForTimeout(3000)


    });

    test('Edit an account', async ({ page }) => {
         await page.locator('div').filter({ hasText: 'Manage' }).nth(5).click();
        
        await page.getByRole('link', { name: 'Clients' }).click();
         const row = page.locator('tr', { hasText: randomEmail });
        try{
          await row.locator('.easy-checkbox label').click();
        }
        catch(e){
          await page.waitForTimeout(2000)
          await row.locator('.easy-checkbox label').click();
        }
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Edit').click();
        await page.getByRole('textbox', { name: 'Address Line 2' }).click();
        await page.getByRole('textbox', { name: 'Address Line 2' }).fill('5000');
        await page.getByRole('button', { name: 'SAVE' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(3000)
     });

      test('delete an account', async ({ page }) => {
        await page.locator('div').filter({ hasText: 'Manage' }).nth(5).click();
        await page.getByRole('link', { name: 'Clients' }).click();
        const row = page.locator('tr', { hasText: randomEmail });
        await row.locator('.easy-checkbox label').click();
        await page.getByRole('button', { name: 'ACTIONS ' }).click();
        await page.getByText('Delete').click();
        await page.getByRole('button', { name: 'DELETE' }).click();
        await page.getByRole('textbox', { name: 'Type DELETE to confirm' }).fill('DELETE');
        await page.locator('#delete-confirmation-btn').click();
        await page.waitForTimeout(3000)
    });
});

