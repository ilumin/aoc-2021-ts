import { readInput, countIncrease } from "./day1";

describe("Day 1", () => {
  describe("readFile", () => {
    it("should return array of string for each line in file", () => {
      const input = readInput("./src/day1/day1.input.txt");
      expect(input).toHaveLength(2000);
    });
  });

  describe("countIncrease with measurementSize: 1", () => {
    const defaultOptions = {
      measurementSize: 1,
    };

    it("should return 0 for input: [1]", () => {
      const input = [1];
      const result = countIncrease({ ...defaultOptions, input });
      expect(result).toEqual(0);
    });

    it("should return 1 for input: [3], head: 1", () => {
      const input = [3];
      const head = 1;
      const result = countIncrease({ ...defaultOptions, input, head });
      expect(result).toEqual(1);
    });

    it("should return 2 for input: [2, 3], head: 1)", () => {
      const input = [2, 3];
      const head = 1;
      const result = countIncrease({ ...defaultOptions, input, head });
      expect(result).toEqual(2);
    });
  });

  describe("countIncrease with measurementSize: 3", () => {
    const defaultOptions = {
      measurementSize: 3,
    };

    it("should return 0 for input: [1,2,3]", () => {
      const input = [1, 2, 3];
      const result = countIncrease({ ...defaultOptions, input });
      expect(result).toEqual(0);
    });

    it("should return 1 for input ([1,2,3,4])", () => {
      const input = [1, 2, 3, 4];
      const result = countIncrease({ ...defaultOptions, input });
      expect(result).toEqual(1);
    });

    it("should return 0 for input ([1,2,3,1])", () => {
      const input = [1, 2, 3, 1];
      const result = countIncrease({ ...defaultOptions, input });
      expect(result).toEqual(0);
    });
  });

  it("day1 answer#1", () => {
    const input = readInput("./src/day1/day1.input.txt");
    const result = countIncrease({ input, measurementSize: 1 });
    expect(result).toEqual(1477);
  });

  it("day1 answer#2", () => {
    const input = readInput("./src/day1/day1.input.txt");
    const result = countIncrease({ input, measurementSize: 3 });
    expect(result).toEqual(1523);
  });
});
