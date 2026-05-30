import BasePage from "./BasePage";
import {Page} from "@playwright/test"
import dotenv from 'dotenv';

dotenv.config();


class SignInPage extends BasePage {
    url = '/auth/login'

    constructor(page:Page){
        super(page)
    }

    get LoginTitle()
    {
        return this.page.getByRole('heading', { name: 'Login' });
    }

    get LoginButton(){
         return this.page.getByRole('button', { name: 'Login' });
    }

    get EmailField()
    {
        return this.page.getByPlaceholder("Your email")
    }

    get PasswordField()
    {
        return this.page.getByPlaceholder("Your password")
    }

    
    async SignInWithCredential()
    {
        let Email:string =process.env.Email!
        let Password:string =process.env.Password!
        console.log("cerd", Email ,Password);
        await this.EmailField.fill(Email);
        await this.PasswordField.fill(Password);
        await this.LoginButton.click();

    }
    

    
}

export default SignInPage;