import { readInput, countIncrease, advanceCounterIncrease } from "./day1";

describe("Day 1", () => {
  describe("readFile", () => {
    it("should return array of string for each line in file", () => {
      const input = readInput("./src/day1/day1.input.txt");
      expect(input).toHaveLength(2000);
    });
  });

  describe("countIncrease", () => {
    it("should return 0 for input ([1])", () => {
      const input = [1];
      const result = countIncrease(input);
      expect(result).toEqual(0);
    });

    it("should return 1 for input ([3], 1)", () => {
      const input = [3];
      const head = 1;
      const result = countIncrease(input, head);
      expect(result).toEqual(1);
    });

    it("should return 2 for input ([2, 3], 1)", () => {
      const input = [2, 3];
      const head = 1;
      const result = countIncrease(input, head);
      expect(result).toEqual(2);
    });
  });

  describe("advanceCounterIncrease", () => {
    it("should return 0 for input ([1,2,3])", () => {
      const input = [1, 2, 3];
      const result = advanceCounterIncrease(input);
      expect(result).toEqual(0);
    });

    it("should return 1 for input ([1,2,3,4])", () => {
      const input = [1, 2, 3, 4];
      const result = advanceCounterIncrease(input);
      expect(result).toEqual(1);
    });

    it("should return 0 for input ([1,2,3,1])", () => {
      const input = [1, 2, 3, 1];
      const result = advanceCounterIncrease(input);
      expect(result).toEqual(0);
    });
  });

  it("day1 answer#1", () => {
    const input = readInput("./src/day1/day1.input.txt");
    const result = countIncrease(input);
    expect(result).toEqual(1477);
  });

  it("day1 answer#2", () => {
    const input = readInput("./src/day1/day1.input.txt");
    const result = advanceCounterIncrease(input);
    expect(result).toEqual(1523);
  });
});
