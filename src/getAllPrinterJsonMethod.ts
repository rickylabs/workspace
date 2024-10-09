import {
    GetAllPrinterResponseModel,
    GetAllPrinterItemResponseModel,
  } from "./models.ts";
  import { dbResultSampleData } from "./data.ts";
  import { JsonConvert } from "./utils.ts";
  
  export async function getAllPrintersJsonMethod(): Promise<GetAllPrinterResponseModel> {
    try {
      //const db = MyDbProLabelHelpers.OpenConnexionProLabel();
      const lstP = dbResultSampleData; //await db.QueryAsync("select * from base_lignes order by lig_desc");
  
      // Convert the result to a JSON string
      const lstPJson = JsonConvert.serializeObject(lstP);
      // Deserialize the JSON string to our specific type
      const lstRep = JsonConvert.deserializeObject(
        lstPJson,
        GetAllPrinterItemResponseModel
      );
  
      return {
        IsOk: true,
        ListPrinter: lstRep,
      };
    } catch (ex) {
      return {
        IsOk: false,
        Message: `${ex}`,
      };
    }
  }
  