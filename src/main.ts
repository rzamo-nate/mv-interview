import { Simulation } from './simulation';

const input = `5 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`;

let simulation = new Simulation(input);

console.log(simulation.run());
