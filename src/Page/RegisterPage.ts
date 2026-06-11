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

     async RegisterNewUser(firstName: string,lastName:string,dateOfbirth:string,country:string,postal:string,housenumber:string,phone:string,email:string,password:string){
          //if(fir)
          //let user = UserData();
          await this.page.locator('#first_name').fill(firstName);
          await this.page.locator('#last_name').fill(lastName);
          await this.page.locator('#dob').fill(dateOfbirth);
          await this.page.locator('#country').selectOption(country);
          await this.page.locator('#postal_code').fill(postal);
          await this.page.locator('#house_number').fill(housenumber);
          await this.page.locator('#phone').fill(phone);
          await this.page.locator('#email').fill(email);
          await this.page.locator('#password').fill(password);

          await this.page.getByRole('button',{name:'Register '}).click();
     }


}

export default RegisterPage;