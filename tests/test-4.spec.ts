import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
await page.goto('https://demo.filamentphp.com/login');

await page.getByLabel('Email address*').click();
await page.getByLabel('Email address*').fill('admin@filamentphp.com');
await page.getByLabel('Email address*').press('Tab');
await page.getByLabel('Password*').fill('password');
await page.getByLabel('Password*').press('Enter');
await page.getByRole('link', { name: 'Products 19' }).click();
await page.getByRole('link', { name: 'New product' }).click();
await page.getByLabel('Name*').click();
await page.getByLabel('Name*').fill('Iphone XS');
await page.getByLabel('Name*').press('Tab');
await page.getByRole('application').getByRole('textbox').fill('It is a simple apple phone with great capacity');
await page.getByLabel('Price*', { exact: true }).click();
await page.getByLabel('Price*', { exact: true }).fill('999');
await page.getByLabel('Compare at price*').click();
await page.getByLabel('Compare at price*').press('ArrowUp');
await page.getByLabel('Compare at price*').fill('14444');
await page.locator('[id="data\\.pricing"] > .fi-section-content-ctn > .fi-section-content > div > div:nth-child(3) > .fi-fo-field-wrp > div > .grid').click();
await page.getByLabel('Cost per item*').fill('455');
await page.getByLabel('SKU (Stock Keeping Unit)*').click();
await page.getByLabel('SKU (Stock Keeping Unit)*').fill('3434');
await page.getByLabel('Barcode (ISBN, UPC, GTIN, etc.)*').click();
await page.getByLabel('Barcode (ISBN, UPC, GTIN, etc.)*').press('CapsLock');
await page.getByLabel('Barcode (ISBN, UPC, GTIN, etc.)*').fill('ISBN');
await page.getByLabel('Quantity*').click();
await page.getByLabel('Quantity*').fill('54');
await page.getByLabel('Security stock*').click();
await page.getByLabel('Security stock*').fill('10043');
await page.getByLabel('This product will be shipped').check();
await page.locator('div:nth-child(2) > .fi-fo-field-wrp > div > .grid > .fi-input-wrapper > .min-w-0 > div > .choices > .choices__inner').click();
await page.getByPlaceholder('Select an option').fill('PH');
await page.getByPlaceholder('Select an option').click();
await page.getByPlaceholder('Select an option').fill('e');
await page.getByRole('option', { name: 'cupiditate quibusdam nobis' }).click();
await page.getByRole('button', { name: 'Create', exact: true }).click();
});