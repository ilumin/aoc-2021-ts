/**
 * aoc 2021/day1 -> https://adventofcode.com/2021/day/1
 */

import { readFileSync } from "fs";

const MEASUREMENT_SIZE = 3;

export const readInput = (fileName: string): number[] => {
  const content = readFileSync(fileName, "utf8");
  return content.split("\n").map((x) => parseInt(x, 10));
};

export const countIncrease = (input: number[], head?: number): number => {
  const [first, ...rest] = input;
  const counter = first > head ? 1 : 0;

  return rest.length <= 0 ? counter : counter + countIncrease(rest, first);
};

export const advanceCounterIncrease = (
  input: number[],
  head?: number
): number => {
  const first = input.slice(0, MEASUREMENT_SIZE).reduce((a, b) => a + b);
  const [_, ...rest] = input;
  const counter = first > head ? 1 : 0;

  return rest.length < MEASUREMENT_SIZE
    ? counter
    : counter + advanceCounterIncrease(rest, first);
};
