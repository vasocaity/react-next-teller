// tests/example.test.ts
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  // ไปที่หน้าหลักของเว็บ
  await page.goto('http://localhost:3000');

  // ตรวจสอบว่า title ของเว็บเป็นไปตามที่คาดหวัง
  await expect(page).toHaveTitle(/Create Next App/);
});

test('check if button works', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  // ใช้ locator เพื่อคลิกปุ่ม
  const submitButton = page.locator('button[data-testid="loginBtn"]');
  expect(submitButton).toBeEnabled();
  await submitButton.click();

});