import test, { expect } from '../src/fixture/customfixture';

test.describe.configure({mode:"serial"});
test.describe('Landed on Sign In Page', ()=>{
 test.beforeEach(async ({HomePage}) =>{

    await HomePage.navigateTo();
     })


     test("Home Page validation", async ({ HomePage,page}) => {

        await expect(page).toHaveURL(HomePage.url);;
        await expect(page).toHaveTitle(HomePage.title);
        await expect(HomePage.headersection()).toBeVisible();
        await expect(HomePage.foodersection()).toBeVisible();
        await expect(HomePage.Logo()).toBeVisible();
        await expect(HomePage.SignInButton).toBeEnabled();

    });

    test('Validate Sign in Page',async ({HomePage,SignInPage,page,AccountPage}) =>{
      
        await HomePage.SignInButton.click();
        await expect(page).toHaveURL(SignInPage.url);
        await expect(SignInPage.LoginTitle).toBeVisible();
        await expect(SignInPage.EmailField).toBeEnabled();
        await expect(SignInPage.PasswordField).toBeEditable();
        // await SignInPage.SignInWithCredential();
        // await expect(page).toHaveURL(AccountPage.url);
        


    })



    


})