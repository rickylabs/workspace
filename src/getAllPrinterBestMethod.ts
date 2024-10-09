import {
  GetAllPrinterItemResponseModel,
  GetAllPrinterResponseModel,
} from "./models.ts";
import { dbResultSampleData } from "./data.ts";
import { assertType } from "./utils.ts";

export async function getAllPrintersBestMethod(): Promise<GetAllPrinterResponseModel> {
  try {
    // const db = MyDbProLabelHelpers.OpenConnexionProLabel();
    const lstP = dbResultSampleData; // await db.QueryAsync("select * from base_lignes order by lig_desc");

    const data = assertType(lstP, GetAllPrinterItemResponseModel);

    return {
      IsOk: true,
      ListPrinter: data,
    };
  } catch (ex) {
    return {
      IsOk: false,
      Message: ex instanceof Error ? ex.message : String(ex),
    };
  }
}
