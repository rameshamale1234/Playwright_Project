// tests/login.spec.js

import { test, expect } from '@playwright/test';
import { LoginPage } from '../.github/workflows/Pages/LoginPage';

test('Verify login functionality', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('student', 'Password123');

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
});