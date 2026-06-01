import {expect, Page}   from '@playwright/test';    

class BasePage{
     url: string  = ''
     title: string = 'Practice Software Testing - Toolshop - v5.0'
    protected readonly page: Page;
    
   constructor( page: Page){
    this.page = page;
   }
   

    async navigateTo():Promise<void>{
        await this.page.goto(this.url);
       await this.page.waitForTimeout(5000);
    } 

     headersection(){
         return this.page.locator('app-header');
    }

    foodersection(){
        return this.page.locator('app-footer');
    }

    Logo(){
        return this.page.locator("svg[id$='Layer_1']");
    }

    get SignInButton ()
    {
        return this.page.getByRole('link', { name: 'Sign in' });
    }
    
    
}

export default BasePage;