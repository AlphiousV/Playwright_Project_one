import test, {expect} from "../src/fixture/customfixture";
import SignInPage from "../src/Page/SignInPage";

test.describe("Landed on Shopping Page",()=>{
    test.beforeEach(async ({SignInPage}) =>{
        await SignInPage.navigateTo();
    })
})