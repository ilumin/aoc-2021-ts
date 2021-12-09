/**
 * aoc 2021/day1 -> https://adventofcode.com/2021/day/1
 */

import { readFileSync } from "fs";

const MEASUREMENT_SIZE = 3;

export const readInput = (fileName: string): number[] => {
  const content = readFileSync(fileName, "utf8");
  return content.split("\n").map((x) => parseInt(x, 10));
};

type countIncreaseOptions = {
  input: number[];
  measurementSize?: number;
  head?: number | undefined;
};

export const countIncrease = (options: countIncreaseOptions): number => {
  const { input = [], measurementSize = MEASUREMENT_SIZE, head } = options;
  const first = input.slice(0, measurementSize).reduce((a, b) => a + b);
  const [_, ...rest] = input;
  const counter = first > head ? 1 : 0;

  return rest.length <= 0
    ? counter
    : counter + countIncrease({ input: rest, head: first, measurementSize });
};
