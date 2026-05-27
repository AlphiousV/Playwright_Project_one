import   test,{ expect } from '../src/fixture/customfixture';

test.describe("Land on HomePage", () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.navigateTo();
    });

    test("Title Validation", async ({ HomePage }) => {

        console.log("URL ",HomePage.url);

    });

});