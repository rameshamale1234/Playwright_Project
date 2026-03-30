import {test,expect} from '@playwright/test';

test('Verify the Copy on double click and mouse hover',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByText('Copy Text').dblclick();
});

test('Verify the mousehover handling',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button', { name: 'Point Me' }).hover();
    await page.getByRole('link', { name: 'Mobiles' }).click();
});



