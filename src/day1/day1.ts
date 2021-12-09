/**
 * aoc 2021/day1 -> https://adventofcode.com/2021/day/1
 */

import { readFileSync } from "fs";

export const readFile = (fileName: string): string[] => {
  const content = readFileSync(fileName, "utf8");
  return content.split("\n");
};

export const countIncrease = (input: string[], head?: number): number => {
  const [first, ...rest] = input;
  const parseFirst = parseInt(first, 10);
  const counter = parseFirst > head ? 1 : 0;

  return rest.length <= 0 ? counter : counter + countIncrease(rest, parseFirst);
};
