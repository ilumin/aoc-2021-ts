import type { DirectionTuple } from "./day2";
import { Direction, readInput, getFinalPosition } from "./day2";

describe("Day 2", () => {
  describe("readInput", () => {
    it("should return an array of direction and position tuple", () => {
      const inputFile = "./src/day2/day2.input.txt";
      const input = readInput(inputFile);

      expect(input).toHaveLength(1000);
      expect(input[0]).toEqual([Direction.FORWARD, 3]);
    });
  });

  describe("getFinalPosition", () => {
    it("should return [0, 0] for empty input", () => {
      const input = [];
      const finalPosition = getFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [1, 0] for [[forward, 1]]", () => {
      const input: DirectionTuple[] = [[Direction.FORWARD, 1]];
      const finalPosition = getFinalPosition(input);

      expect(finalPosition).toEqual([1, 0]);
    });

    it("should return [0, 1] for [[down, 1]]", () => {
      const input: DirectionTuple[] = [[Direction.DOWN, 1]];
      const finalPosition = getFinalPosition(input);

      expect(finalPosition).toEqual([0, 1]);
    });

    it("should return [0, 0] for [[down, 1],[up, 1]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 1],
        [Direction.UP, 1],
      ];
      const finalPosition = getFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [1, 1] for [[down, 1],[forward, 1]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 1],
        [Direction.FORWARD, 1],
      ];
      const finalPosition = getFinalPosition(input);

      expect(finalPosition).toEqual([1, 1]);
    });
  });

  it("day2 answer#1", () => {
    const inputFile = "./src/day2/day2.input.txt";
    const input = readInput(inputFile);
    const [x, y] = getFinalPosition(input);

    expect(x * y).toEqual(2073315);
  });
});
