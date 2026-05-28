import {test as base} from '@playwright/test';
import RegisterPage from '../Page/RegisterPage';
import BasePage from '../Page/BasePage';
import SignInPage from '../Page/SignInPage';



const customfixture = base.extend<{
    RegisterPage: RegisterPage,
    HomePage: BasePage,
    SignInPage: SignInPage
}>({
    RegisterPage: async({page},use) => {
        const loginPage = new RegisterPage(page);
        await use(loginPage);
    },
    HomePage: async({page},use) => {
        const homePage = new BasePage(page);
        await use(homePage);
    },
    SignInPage: async({page},use) =>{
        const signInPage =  new SignInPage(page);
        await use(signInPage)
    }

});

export default customfixture;
export const expect = customfixture.expect




