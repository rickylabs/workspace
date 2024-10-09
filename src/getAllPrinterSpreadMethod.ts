import {GetAllPrinterItemResponseModel,GetAllPrinterResponseModel} from "./models.ts"
import {dbResultSampleData} from "./data.ts"
import {JsonConvert} from "./utils.ts"

async function getAllPrinters(): Promise<GetAllPrinterResponseModel> {
    try {
        //const db = MyDbProLabelHelpers.OpenConnexionProLabel();
        
        const lstP = dbResultSampleData as unknown as Array<{T: any}> //await db.QueryAsync("select * from base_lignes order by lig_desc");

        const data = lstP.map(v => {
              const item = {
                ...lstP
              } as unknown as GetAllPrinterItemResponseModel
              
              return item
        })

        return {
            IsOk: true,
            ListPrinter: data
        };
    } catch (ex) {
        return {
            IsOk: false,
            Message: `${ex}`
        };
    }
}
