
import {test,expect} from '@playwright/test';


test('Verify the male radio button is selected',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('input[name="gender"][value="male"]').check();
   }
)

test('Verify the female radio button is selected',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
   let radio2=page.getByRole('radio', {name: 'Female'});
   await radio2.check();
   await expect(radio2).toBeChecked();
})