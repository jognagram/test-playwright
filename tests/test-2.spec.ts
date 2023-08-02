import { test, expect } from '@playwright/test';

test('Ensure we can login and logout', async ({ page }) => {
  await page.goto('https://demo.filamentphp.com/login');
  await page.getByLabel('Email address*').fill('admin@filamentphp.com');
  await page.getByLabel('Password*').fill('password');
  await page.getByRole('button').click();
  await page.waitForSelector('body');
  await expect(page).toHaveURL('https://demo.filamentphp.com/admin/dashboard');
  await page.getByRole('button', { name: 'Account' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.waitForSelector('body');
  await expect(page).toHaveURL('https://demo.filamentphp.com/login');


});