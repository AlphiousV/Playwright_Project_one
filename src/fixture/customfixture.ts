import {test as base} from '@playwright/test';
import RegisterPage from '../Page/RegisterPage';
import BasePage from '../Page/BasePage';
import SignInPage from '../Page/SignInPage';
import AccountPage from '../Page/AccountPage';
import ShoppingPage from '../Page/ShoppingPage'



const customfixture = base.extend<{
    RegisterPage: RegisterPage,
    HomePage: BasePage,
    SignInPage: SignInPage,
    AccountPage: AccountPage,
    ShoppingPage:ShoppingPage
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
    },
    AccountPage:async ({page},use) => {
        const accountpage = new AccountPage(page);
        await use(accountpage);
    },
    ShoppingPage: async({page},use) =>{
        const shoppingpage = new ShoppingPage(page);
        await use(shoppingpage);
    }



});

export default customfixture;
export const expect = customfixture.expect




