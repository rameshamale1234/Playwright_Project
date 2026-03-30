import{test,expect} from '@playwright/test';

test('Verify the new window handling',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const [newPage]=await Promise.all(
        [
            page.waitForEvent('popup'),
            page.getByText('New Tab').click()
        ]

    );
   
    await newPage.waitForLoadState();
    await expect(newPage.getByRole('heading', { name: 'SDET-QA Blog' })).toBeVisible();
    await newPage.close();
    await page.bringToFront();
    await expect(page.getByRole('heading', { name: 'Automation Testing Practice' })).toBeVisible();

})  