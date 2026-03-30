import { test, expect } from '@playwright/test';


test('Simple alert box handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Correct: no await
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('#alertBtn').click();
});

test('Confirmation alert box handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await page.locator('#confirmBtn').click();    
});


test('Prompt alert box handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');    
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept('Playwright');
    });
    await page.locator('#promptBtn').click();    
});

