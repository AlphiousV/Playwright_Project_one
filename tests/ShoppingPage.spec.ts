import test, {expect} from "../src/fixture/customfixture";


test.describe("Landed on Shopping Page",()=>{
    test.beforeEach(async ({SignInPage}) =>{
        await SignInPage.navigateTo();
    })

    test('Landed on Shopping', async ({SignInPage,RegisterPage}) =>{

        await RegisterPage.RegistrationLink.click();
        await RegisterPage.RegisterNewUser();
        await SignInPage.SignInWithCredential();

    })
})