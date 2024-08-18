import { Direction } from './direction';
import { Grid } from './grid';

/**
 * When the robot moves "forward" (from the robot's perspective), this map will be used to determine
 * how the robot's position is updated depending on which direction it is facing.
 */
const MOVEMENT_MAP: {
  [key in Direction]: { changeX: number; changeY: number };
} = {
  [Direction.N]: { changeX: 0, changeY: 1 },
  [Direction.E]: { changeX: 1, changeY: 0 },
  [Direction.S]: { changeX: 0, changeY: -1 },
  [Direction.W]: { changeX: -1, changeY: 0 }
};

export class Robot {
  private x: number;
  private y: number;
  private direction: Direction;
  private instructions: string;
  private grid: Grid;

  constructor(
    startX: number = 0,
    startY: number = 0,
    startDirection: Direction = Direction.N,
    instructions: string = '',
    grid: Grid = new Grid()
  ) {
    // This will be resilient in the case where any of the arguments are null/undefined
    this.x = startX || 0;
    this.y = startY || 0;
    this.direction = startDirection || Direction.N;
    this.instructions = instructions || '';
    this.grid = grid || new Grid();
  }

  public getPosition(): string {
    return `${this.x}, ${this.y}`;
  }

  public getDirection(): Direction {
    return this.direction;
  }

  /**
   *
   * @returns true if the robot successfully executes all instructions, false if it gets lost
   */
  public executeInstructions(): boolean {
    let lost = false;
    for (const instruction of this.instructions) {
      switch (instruction) {
        case 'F':
          // If we can't move forward, we're lost
          lost = !this.moveForward();
          break;
        case 'L':
        case 'R':
          this.turn(instruction);
          break;
        default:
          throw new Error(`Invalid instruction: ${instruction}`);
      }
      if (lost) {
        return false;
      }
    }
    return true;
  }

  /**
   *
   * @returns true if the robot successfully moves forward, false if it gets lost
   */
  private moveForward(): boolean {
    const movement = MOVEMENT_MAP[this.direction];
    const newX = this.x + movement.changeX;
    const newY = this.y + movement.changeY;

    if (this.grid.checkIfCoordinateIsWithinBounds(newX, newY)) {
      this.x = newX;
      this.y = newY;
      return true;
    }
    return false;
  }

  /**
   *
   * @param directionChange 'L' to turn left, 'R' to turn right
   *
   * This method will update the robot's direction according to the directionChange argument
   */
  private turn(directionChange: 'L' | 'R'): void {
    switch (this.direction) {
      case Direction.N:
        this.direction = directionChange === 'L' ? Direction.W : Direction.E;
        break;
      case Direction.E:
        this.direction = directionChange === 'L' ? Direction.N : Direction.S;
        break;
      case Direction.S:
        this.direction = directionChange === 'L' ? Direction.E : Direction.W;
        break;
      case Direction.W:
        this.direction = directionChange === 'L' ? Direction.S : Direction.N;
        break;
    }
  }
}
