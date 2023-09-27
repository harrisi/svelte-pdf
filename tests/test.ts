import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});

test('gen pdf', async ({ page }) => {
  await page.goto('/')
  await page.pdf({ path: 'foo.pdf' })
  await expect(true).toBeTruthy()
})
