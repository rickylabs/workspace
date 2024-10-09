// Utility function to mimic C#'s JsonConvert behavior
export class JsonConvert {
    static deserializeObject<T>(json: string, type: new () => T): T[] {
      const parsed = JSON.parse(json);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => Object.assign(new type(), item));
      }
      throw new Error("Expected an array");
    }
  
    static serializeObject(obj: any): string {
      return JSON.stringify(obj);
    }
  }
  