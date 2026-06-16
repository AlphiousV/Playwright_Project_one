import test, {expect} from "../src/fixture/customfixture";
import ReadExcel from "../src/utils/ExcelUtils";

const Testdata = ReadExcel('Test_data/TestData.xlsx');

    
test.describe.configure({mode:"serial"});
 Testdata.forEach(data =>{

test.describe(`Landed on Shopping Page ${data.Email}`,{ tag: ['@sessionTC','@Shopping'] },()=>{
    test.beforeEach(async ({SignInPage}) =>{
      
        await SignInPage.navigateTo();
    })

   

    test(`Landed on Shopping`, async ({SignInPage,AccountPage,ShoppingPage,page}) =>{

        await SignInPage.SignInWithCredential(data.Email,data.Password);
        await AccountPage.HomePage();
        await expect(page.locator(ShoppingPage.userName)).toContainText(data.FirstName + " "+ data.LastName);

    })
    

    test(`Verify Custom left Option Buttons`, async ({SignInPage,AccountPage,ShoppingPage,page}) =>{
         await SignInPage.SignInWithCredential(data.Email,data.Password);
         await AccountPage.HomePage();
         await expect(page.locator(ShoppingPage.userName)).toContainText(data.FirstName + " "+ data.LastName);
         await ShoppingPage.checkSortDrop(); 

        })

     })

   
})
