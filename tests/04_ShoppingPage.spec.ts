import test, {expect} from "../src/fixture/customfixture";
import ReadExcel from "../src/utils/ExcelUtils";

const Testdata = ReadExcel('Test_data/TestData.xlsx');

    

test.describe("Landed on Shopping Page",()=>{
    test.beforeEach(async ({SignInPage}) =>{
      
        await SignInPage.navigateTo();
    })

    Testdata.forEach(data =>{

    test(`Landed on Shopping ${data.Email}`, async ({SignInPage,RegisterPage}) =>{

        await SignInPage.SignInWithCredential(data.Email,data.Password);

    })
        })
})
