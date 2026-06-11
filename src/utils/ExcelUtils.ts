import XLSX from 'xlsx';
import * as fs from "fs";

import  NewUser  from "../model/UserModel";

function ReadExcel(Path :string):NewUser[]
{
     if (!fs.existsSync(Path)) {
        console.log(`Excel file not found: ${Path}`);
        return [];
    }
    
    const Workbook = XLSX.readFile(Path);
    const SheetName = Workbook.SheetNames[0];
    const sheet = Workbook.Sheets[SheetName]
    return XLSX.utils.sheet_to_json<NewUser>(sheet);
   
    

}

export default ReadExcel;