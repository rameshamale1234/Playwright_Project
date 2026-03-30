import {test,expect} from '@playwright/test';
test('getByAltText',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
await page.getByAltText('logo image').click();
})

test('getByRole textbox is role of element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('textbox', { name: 'username' }).fill('admin');
    await page.screenshot({ path: 'Screenshots/tests/Screenshot.png' });
})

test('getByRole button is role of element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('button', { name: 'Primary Action' }).click();
    await page.screenshot({ path: 'Screenshots/tests/Screenshot.png' });
});

test('getByRole link is role of element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('menuitem', { name: 'Home' }).click();
    await page.screenshot({ path: 'Screenshots/tests/Screenshot.png' });
});

test('getByRole checkbox is role of element',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('checkbox', { name:'Accept terms' }).check();
    await page.screenshot({ path: 'Screenshots/tests/Screenshot.png' });
});

test('getByLabel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByLabel(' Standard').check();
    await page.screenshot({path: 'Screenshots/tests/Screenshot.png',fullPage: true});});


