export class GetAllPrinterItemResponseModel {
    lig_id: number;
    lig_desc: string;
    lig_limit_copy: boolean;
    lig_max_copy: number;
  }
  
  export interface GetAllPrinterResponseModel {
    IsOk: boolean;
    ListPrinter?: GetAllPrinterItemResponseModel[];
    Message?: string;
  }
  