import {Page}   from '@playwright/test';    

class BasePage{
     url: string  = ''
    protected readonly page: Page;
   constructor( page: Page){
    this.page = page;
   }

    async navigateTo():Promise<void>{
        await this.page.goto(this.url);
    }   
}

export default BasePage;