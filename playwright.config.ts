import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  timeout: 60_000,
  retries:  1 ,
  workers: 1 ,
  reporter: 'html',
   use: {
     baseURL: 'https://practicesoftwaretesting.com/',
     launchOptions:{
      slowMo:2000
     },
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

});
