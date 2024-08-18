import { Simulation } from '../src/simulation';

describe('Simulation', () => {
  it('should run the simulation and return the expected output', () => {
    const input = `5 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF`;

    let simulation = new Simulation(input);
    expect(simulation.run()).toEqual(`(4, 4, E)\n(0, 4, W) LOST\n`);
  });

  it('should throw an error if the grid dimensions are invalid', () => {
    const input = `5 cats\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF`;

    try {
      new Simulation(input);
    } catch (e: any) {
      expect(e.message).toBe('Invalid grid dimensions');
    }
  });

  it('should throw an error if a robot definition is invalid', () => {
    const input = `5 8\n(2, 3, J) LFRFF\n(0, 2, N) FFLFRFF`;

    try {
      new Simulation(input);
    } catch (e: any) {
      expect(e.message).toBe('Invalid robot definition');
    }
  });
});
