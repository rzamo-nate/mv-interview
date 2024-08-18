import { Direction } from '../src/model/direction';
import { Grid } from '../src/model/grid';
import { Robot } from '../src/model/robot';

describe('Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot(0, 0, Direction.N, '', new Grid());
  });

  it('should have correct position and direction when initialized with no arguments', () => {
    robot = new Robot();
    expect(robot.getPosition()).toBe('0, 0');
    expect(robot.getDirection()).toBe(Direction.N);
    expect(robot.executeInstructions()).toBe(true);
  });

  it('should execute valid instructions correctly', () => {
    robot = new Robot(2, 3, Direction.E, 'LFRFRRRRLLLLF', new Grid(5, 8));
    let lost = !robot.executeInstructions();
    expect(robot.getPosition()).toBe('4, 4');
    expect(robot.getDirection()).toBe(Direction.E);
    expect(lost).toBe(false);
  });

  it('should correctly identify when it is lost', () => {
    robot = new Robot(2, 3, Direction.E, 'FF', new Grid(4, 4));
    let lost = !robot.executeInstructions();
    expect(robot.getPosition()).toBe('3, 3');
    expect(robot.getDirection()).toBe(Direction.E);
    expect(lost).toBe(true);
  });

  it('should error when provided invalid instructions', () => {
    robot = new Robot(2, 3, Direction.E, 'LZRFF', new Grid(5, 8));
    try {
      robot.executeInstructions();
    } catch (e: any) {
      expect(e.message).toBe('Invalid instruction: Z');
    }
  });
});
