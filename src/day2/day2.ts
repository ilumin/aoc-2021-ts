/**
 * aoc 2021 day 2 -> https://adventofcode.com/2021/day/2
 */
import { readFile } from "./../utils";

export enum Direction {
  FORWARD = "forward",
  DOWN = "down",
  UP = "up",
}

export type DirectionTuple = [Direction, number];
export type Point = [number, number];

export const readInput = (file: string): DirectionTuple[] => {
  const content = readFile(file);
  return content.split("\n").map((line) => {
    const [direction, position] = line.split(" ");

    return [Direction[direction.toUpperCase()], parseInt(position, 10)];
  });
};

export const getFinalPosition = (directions?: DirectionTuple[]): Point => {
  const originPoint: Point = [0, 0];
  if (!directions || directions.length <= 0) return originPoint;

  return directions.reduce((previous: Point, movement: DirectionTuple) => {
    const [x, y] = previous;
    const [direction, distance] = movement;

    switch (direction) {
      case Direction.FORWARD:
        return [x + distance, y];
      case Direction.DOWN:
        return [x, y + distance];
      case Direction.UP:
        return [x, y - distance];
      default:
        return previous;
    }
  }, originPoint);
};
