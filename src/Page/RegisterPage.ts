import BasePage from "./BasePage.ts";
import {Page}   from '@playwright/test';

class RegisterPage extends BasePage{
     url: string = '/auth/register';

    constructor(page: Page){
        super(page);
     }

     get RegistrationLink (){
          return this.page.getByRole('link', { name: 'Register your account' });
     }

     get RegisterTitle() {
          return this.page.getByText('Customer registration');
     }



}

export default RegisterPage;