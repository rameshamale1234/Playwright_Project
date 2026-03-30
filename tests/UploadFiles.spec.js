test('Upload file',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.setInputFiles('')
})