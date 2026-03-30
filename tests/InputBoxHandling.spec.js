const {test, expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('Login test',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await expect(page.locator('text=Logged In Successfully')).toBeVisible(); 
})
