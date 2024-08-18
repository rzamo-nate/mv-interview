import { Grid } from '../src/model/grid';

describe('Grid', () => {
  let grid: Grid;

  beforeEach(() => {
    grid = new Grid(5, 5);
  });

  it('should return true if coordinate is within bounds', () => {
    expect(grid.checkIfCoordinateIsWithinBounds(3, 3)).toBe(true);
  });

  it('should return false if x coordinate is outside bounds', () => {
    expect(grid.checkIfCoordinateIsWithinBounds(6, 4)).toBe(false);
  });

  it('should return false if y coordinate is outside bounds', () => {
    expect(grid.checkIfCoordinateIsWithinBounds(4, 6)).toBe(false);
  });

  it('should return false if x coordinate is negative', () => {
    expect(grid.checkIfCoordinateIsWithinBounds(-1, 3)).toBe(false);
  });

  it('should return false if y coordinate is negative', () => {
    expect(grid.checkIfCoordinateIsWithinBounds(3, -1)).toBe(false);
  });
});
