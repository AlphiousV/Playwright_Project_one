import {test,expect} from '@playwright/test';

test('Verify the title of the page',async ({page})=>{
    await page.goto('/');
    await expect(page).toHaveTitle('Practice Software Testing');
});