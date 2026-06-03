import BasePage from "./BasePage";
import {Page,expect} from "@playwright/test"
import dotenv from 'dotenv';
import AccountPage from "./AccountPage";
import UserData from "../utils/userdetails";


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
        let user = UserData();
        let Email:string =user.Email
        let Password:string =user.Password
        console.log("cerd", Email ,Password);
        await this.EmailField.fill(Email);
        await this.PasswordField.fill(Password);
        await this.LoginButton.click();
        console.log(new AccountPage(this.page).url);
        await expect(this.page).toHaveURL(new AccountPage(this.page).url);

    }
    

    
}

export default SignInPage;