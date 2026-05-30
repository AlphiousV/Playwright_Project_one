import   test,{ expect } from '../src/fixture/customfixture';

test.describe("Landed on HomePage sucessfully", () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.navigateTo();
    });

    test("Home Page validation", async ({ HomePage,page}) => {

        await expect(page).toHaveURL(HomePage.url);;
        await expect(page).toHaveTitle(HomePage.title);
        await expect(HomePage.headersection()).toBeVisible();
        await expect(HomePage.foodersection()).toBeVisible();
        await expect(HomePage.Logo()).toBeVisible();
        await expect(HomePage.SignInButton).toBeEnabled();



    });

});