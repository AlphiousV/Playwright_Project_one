import   test,{ expect } from '../src/fixture/customfixture';

test.describe.configure({mode:"serial"});
test.describe("Landed on HomePage sucessfully", () => {

    test.beforeEach(async ({ HomePage,page }) => {
        await HomePage.navigateTo();
        await page.waitForTimeout(2000)
    });

    test("Home Page validation @Regression", async ({ HomePage,page}) => {

        await expect(page).toHaveURL(HomePage.url);;
        await expect(page).toHaveTitle(HomePage.title);
        await expect(HomePage.headersection()).toBeVisible();
        await expect(HomePage.foodersection()).toBeVisible();
        await expect(HomePage.Logo()).toBeVisible();
        await expect(HomePage.SignInButton).toBeEnabled();

    });

});

