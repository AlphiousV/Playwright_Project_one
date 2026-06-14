import test, {expect} from "../src/fixture/customfixture";
import ReadExcel from "../src/utils/ExcelUtils";

const Testdata = ReadExcel('Test_data/TestData.xlsx');

    
test.describe.configure({mode:"serial"});
test.describe("Landed on Shopping Page",()=>{
    test.beforeEach(async ({SignInPage}) =>{
      
        await SignInPage.navigateTo();
    })

    Testdata.forEach(data =>{

    test(`Landed on Shopping ${data.Email}`, async ({SignInPage,AccountPage,ShoppingPage,page}) =>{

        await SignInPage.SignInWithCredential(data.Email,data.Password);
        await AccountPage.HomePage();
        await expect(page.locator(ShoppingPage.userName)).toContainText(data.FirstName + " "+ data.LastName);

    })
    
    })
   

    test("Verify Custom left Option Buttons", async ({SignInPage,AccountPage,ShoppingPage,page}) =>{
         await SignInPage.SignInWithCredential(Testdata[0].Email,Testdata[0].Password);
         await AccountPage.HomePage();
         await expect(page.locator(ShoppingPage.userName)).toContainText(Testdata[0].FirstName + " "+ Testdata[0].LastName);
         await ShoppingPage.checkSortDrop(); 



    })

   
})
