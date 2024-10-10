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

// typeUtils.ts

export function assertType<T extends object>(
  data: Record<string, unknown>[],
  ModelClass: new () => T
): T[] {
  const modelKeys = Object.keys(new ModelClass()) as (keyof T)[];

  const warns = [] as { message: string }[];

  const validation = data.reduce<T[]>((acc, item) => {
    const filteredItem = modelKeys.reduce((obj, key) => {
      if (key in item) {
        const validItem = item[key as keyof typeof item];
        return {
          ...obj,
          [key]: validItem,
        };
      } else {
        warns.push({
          message: `unhandled field in input data: ${item[key as string]}`,
        });
        return obj;
      }
    }, {} as Partial<T>);

    acc.push(filteredItem as T);
    return acc;
  }, []);

  warns.forEach((w) => console.warn(w.message));

  return validation;
}
