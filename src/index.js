'use strict'

const AMOUNT_BALLS = 12;
const START_DIAMETR = 0.5;
const WALL_THICKNESS = 0.01;

let totalVolume = 0;

for (let i = 1; i <= AMOUNT_BALLS; i++) {
  let d = START_DIAMETR + 2 * (i-2) * WALL_THICKNESS;
  let V = 4 / 3 * Math.PI * Math.pow(d / 2, 3);
  totalVolume += V;
}

console.log('Answer: ', totalVolume, 'cubic meters.')
