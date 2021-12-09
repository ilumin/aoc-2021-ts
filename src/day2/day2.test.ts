import type { DirectionTuple } from "./day2";
import {
  Direction,
  readInput,
  getBasicFinalPosition,
  getAdvanceFinalPosition,
} from "./day2";

describe("Day 2", () => {
  describe("readInput", () => {
    it("should return an array of direction and position tuple", () => {
      const inputFile = "./src/day2/day2.input.txt";
      const input = readInput(inputFile);

      expect(input).toHaveLength(1000);
      expect(input[0]).toEqual([Direction.FORWARD, 3]);
    });
  });

  describe("getBasicFinalPosition", () => {
    it("should return [0, 0] for empty input", () => {
      const input = [];
      const finalPosition = getBasicFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [1, 0] for [[forward, 1]]", () => {
      const input: DirectionTuple[] = [[Direction.FORWARD, 1]];
      const finalPosition = getBasicFinalPosition(input);

      expect(finalPosition).toEqual([1, 0]);
    });

    it("should return [0, 1] for [[down, 1]]", () => {
      const input: DirectionTuple[] = [[Direction.DOWN, 1]];
      const finalPosition = getBasicFinalPosition(input);

      expect(finalPosition).toEqual([0, 1]);
    });

    it("should return [0, 0] for [[down, 1],[up, 1]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 1],
        [Direction.UP, 1],
      ];
      const finalPosition = getBasicFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [1, 1] for [[down, 1],[forward, 1]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 1],
        [Direction.FORWARD, 1],
      ];
      const finalPosition = getBasicFinalPosition(input);

      expect(finalPosition).toEqual([1, 1]);
    });
  });

  describe("getAdvanceFinalPosition", () => {
    it("should return [0, 0] for empty input", () => {
      const input = [];
      const finalPosition = getAdvanceFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [1, 0] for [[forward, 1]]", () => {
      const input: DirectionTuple[] = [[Direction.FORWARD, 1]];
      const finalPosition = getAdvanceFinalPosition(input);

      expect(finalPosition).toEqual([1, 0]);
    });

    it("should return [0, 0] for [[down, 1]]", () => {
      const input: DirectionTuple[] = [[Direction.DOWN, 1]];
      const finalPosition = getAdvanceFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [0, 0] for [[down, 1],[up, 1]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 1],
        [Direction.UP, 1],
      ];
      const finalPosition = getAdvanceFinalPosition(input);

      expect(finalPosition).toEqual([0, 0]);
    });

    it("should return [2, 6] for [[down, 3],[forward, 2]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 3],
        [Direction.FORWARD, 2],
      ];
      const finalPosition = getAdvanceFinalPosition(input);

      expect(finalPosition).toEqual([2, 6]);
    });

    it("should return [4, 2] for [[down, 3],[forward, 2],[up, 2],[forward, 2]]", () => {
      const input: DirectionTuple[] = [
        [Direction.DOWN, 3],
        [Direction.FORWARD, 2],
        [Direction.UP, 2],
        [Direction.FORWARD, 2],
      ];
      const finalPosition = getAdvanceFinalPosition(input);

      expect(finalPosition).toEqual([4, 2]);
    });

    it("@debug should pass day2 test cases", () => {
      // forward 5 adds 5 to your horizontal position, a total of 5.
      // Because your aim is 0, your depth does not change.
      // down 5 adds 5 to your depth, resulting in a value of 5
      // forward 8 adds 8 to your horizontal position, a total of 13.
      // Because your aim is 5, your depth increases by 8*5=40
      // up 3 decreases your depth by 3, resulting in a value of 2
      // down 8 adds 8 to your depth, resulting in a value of 10
      // forward 2 adds 2 to your horizontal position, a total of 15
      // Because your aim is 10, your depth increases by 2*10=20 to a total of 60.
      expect(
        getAdvanceFinalPosition([
          [Direction.FORWARD, 5],
          [Direction.DOWN, 5],
          [Direction.FORWARD, 8],
          [Direction.UP, 3],
          [Direction.DOWN, 8],
          [Direction.FORWARD, 2],
        ])
      ).toEqual([15, 60]);
    });
  });

  it("day2 answer#1", () => {
    const inputFile = "./src/day2/day2.input.txt";
    const input = readInput(inputFile);
    const [x, y] = getBasicFinalPosition(input);

    expect(x * y).toEqual(2073315);
  });

  it("day2 answer#2", () => {
    const inputFile = "./src/day2/day2.input.txt";
    const input = readInput(inputFile);
    const [x, y] = getAdvanceFinalPosition(input);

    expect(x * y).toEqual(1840311528);
  });
});
