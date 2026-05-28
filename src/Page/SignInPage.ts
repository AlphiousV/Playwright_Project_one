import BasePage from "./BasePage";
import {Page} from "@playwright/test"


class SignInPage extends BasePage {
    url = '/auth/login'

    constructor(page:Page){
        super(page)
    }

    get LoginTitle()
    {
        return this.page.getByRole('heading', { name: 'Login' });
    }

    get EmailField()
    {
        return this.page.getByPlaceholder("Your email")
    }

    get PasswordField()
    {
        return this.page.getByPlaceholder("Your password")
    }

    

    
}

export default SignInPage;