import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  // await page.locator('strong:has-text("Français")').click();
  // await page.locator('[placeholder="Rechercher sur Wikipédia"]').click();
  // await page.keyboard.type('raton laveur');
  // await page.keyboard.press('Enter');
  // await expect(page.locator('h1')).toHaveText('/Raton laveur');
  await page.click('text=Français');
  await page.fill('[paceholder="Rechercher sur Wikipédia"]', 'raton laveur');
  await page.keyboard.press('Enter');
  await page.waitForSelector('text=Raton laveur');
  await expect(page.locator('h1')).toHaveText(/Raton laveur/);
});