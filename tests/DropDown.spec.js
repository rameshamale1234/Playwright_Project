import {test,expect} from '@playwright/test';
import { describe } from "node:test";

describe(   'DropDown Handling',()=>{
    test('Verify the dropdown useing the id locator',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        let dropdown=page.locator('#country');
        await dropdown.selectOption('India');
        let selectedOption=await dropdown.inputValue();
        expect(selectedOption).toBe('india');
    })

    test('Verify the dropdown handling using getByRole',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.getByRole('combobox', { name: 'Country:' }).selectOption('india');
        let selectedOption=await page.getByRole('combobox', { name: 'Country:' }).inputValue();
        expect(selectedOption).toBe('india');
    })

    test('Verify the dropdown useing the getByLabel',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        let dropdown=page.getByLabel('Country:');
        await dropdown.selectOption('India');
        let selectedOption=await dropdown.inputValue();
        expect(selectedOption).toBe('india');
    })
})