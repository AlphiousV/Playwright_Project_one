import {test as base} from '@playwright/test';
import LoginPage from '../Page/LoginPage';
import BasePage from '../Page/BasePage';



const customfixture = base.extend<{
    loginPage: LoginPage,
    HomePage: BasePage
}>({
    loginPage: async({page},use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    HomePage: async({page},use) => {
        const homePage = new BasePage(page);
        await use(homePage);
    }
});

export default customfixture;
export const expect = customfixture.expect



