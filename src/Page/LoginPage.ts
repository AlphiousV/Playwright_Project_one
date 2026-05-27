import BasePage from "./BasePage.ts";
import {Page}   from '@playwright/test';

class LoginPage extends BasePage{
    protected url: string = '/auth/login';

    constructor(page: Page){
        super(page);
     }


}

export default LoginPage;