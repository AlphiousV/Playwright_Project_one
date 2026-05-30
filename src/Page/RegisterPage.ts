import BasePage from "./BasePage.ts";
import {Page}   from '@playwright/test';
import UserData from "../utils/userdetails.ts";


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

     async RegisterNewUser(){
          let user = UserData();
          await this.page.locator('#first_name').fill(user.FirstName);
          await this.page.locator('#last_name').fill(user.LastName);
          await this.page.locator('#dob').fill(user.DateOfBirth);
          await this.page.locator('#country').selectOption(user.Country);
          await this.page.locator('#postal_code').fill(user.PostalCode);
          await this.page.locator('#house_number').fill(user.HouseNumber);
          await this.page.locator('#phone').fill(user.Phone);
          await this.page.locator('#email').fill(user.Email);
          await this.page.locator('#password').fill(user.Password);

          await this.page.getByRole('button',{name:'Register '}).click();
     }


}

export default RegisterPage;