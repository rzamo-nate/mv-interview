export class Grid {
  private width: number;
  private height: number;

  constructor(width: number = 0, height: number = 0) {
    // This will be resilient in the case where width or height are null/undefined
    this.width = width || 0;
    this.height = height || 0;
  }

  /**
   *
   * @param x
   * @param y
   * @returns true if the coordinate is within the bounds of the grid
   */
  public checkIfCoordinateIsWithinBounds(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }
}
