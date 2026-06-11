import test, {expect} from "../src/fixture/customfixture";
import ReadExcel from "../src/utils/ExcelUtils";

const Testdata = ReadExcel('Test_data/TestData.xlsx');
console.log("TEstData ",Testdata)
    

test.describe("Landed on Shopping Page",()=>{
    test.beforeEach(async ({SignInPage}) =>{
      
        await SignInPage.navigateTo();
    })

    Testdata.forEach(data =>{

    test(`Landed on Shopping ${data.Email}`, async ({SignInPage,RegisterPage}) =>{

        await RegisterPage.RegistrationLink.click();
        // await RegisterPage.RegisterNewUser(data.FirstName,data.LastName,data.DateOfBirth,data.Country,data.PostalCode,data.HouseNumber,data.Phone,data.Email,data.Password);
        await SignInPage.SignInWithCredential(data.Email,data.Password);

    })
        })
})
