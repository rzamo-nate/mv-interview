import { Direction } from './model/direction';
import { Grid } from './model/grid';
import { Robot } from './model/robot';

export class Simulation {
  private robots: Robot[];

  constructor(input: string) {
    this.robots = this.createRobots(input);
  }

  /**
   *
   * @param input
   * @returns an array of robots parsed from the input string
   */
  private createRobots(input: string): Robot[] {
    if (input) {
      const lines: string[] = input.split('\n');
      const robots: Robot[] = [];
      let grid: Grid = new Grid();

      for (let [index, line] of lines.entries()) {
        if (index === 0) {
          // Read in the configuration for the grid
          const [width, height] = line
            .trim()
            .split(' ')
            .map((character) => Number(character));

          if (isNaN(width) || isNaN(height)) {
            throw new Error('Invalid grid dimensions');
          }

          grid = new Grid(width, height);
        } else {
          // For each additional line, create a new robot
          const [x, y, direction, instructions] = line
            .trim()
            .replace(/[(),]/g, '')
            .split(' ');

          if (
            isNaN(Number(x)) ||
            isNaN(Number(y)) ||
            isNaN(Direction[direction as 'N' | 'E' | 'S' | 'W']) ||
            !instructions
          ) {
            throw new Error('Invalid robot definition');
          }

          const robot = new Robot(
            Number(x),
            Number(y),
            Direction[direction as 'N' | 'E' | 'S' | 'W'],
            instructions,
            grid
          );
          robots.push(robot);
        }
      }

      return robots;
    }
    return [];
  }

  /**
   *
   * @returns the output of the simulation
   */
  public run(): string {
    let output = '';
    for (const robot of this.robots) {
      const lost = !robot.executeInstructions();
      output += `(${robot.getPosition()}, ${Direction[robot.getDirection()]})${
        lost ? ' LOST' : ''
      }\n`;
    }
    return output;
  }
}
