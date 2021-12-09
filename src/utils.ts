import { readFileSync } from "fs";

export const readFile = (path: string): string => readFileSync(path, "utf8");
