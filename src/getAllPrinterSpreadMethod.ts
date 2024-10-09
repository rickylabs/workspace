import {
  GetAllPrinterItemResponseModel,
  GetAllPrinterResponseModel,
} from "./models.ts";
import { dbResultSampleData } from "./data.ts";
import { assertType } from "./utils.ts";

export async function getAllPrintersSpreadMethod(): Promise<GetAllPrinterResponseModel> {
  try {
    // const db = MyDbProLabelHelpers.OpenConnexionProLabel();
    const lstP = dbResultSampleData; // await db.QueryAsync("select * from base_lignes order by lig_desc");

    const modelKeys = Object.keys(
      new GetAllPrinterItemResponseModel()
    ) as (keyof GetAllPrinterItemResponseModel)[];

    const data = lstP.reduce<GetAllPrinterItemResponseModel[]>((acc, item) => {
      const filteredItem = modelKeys.reduce((obj, key) => {
        if (key in item) {
          const validItem = item[key];
          return {
            ...obj,
            [key]: validItem,
          };
        } else {
          return obj;
        }
      }, {} as GetAllPrinterItemResponseModel);

      acc.push(filteredItem);
      return acc;
    }, []);

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
