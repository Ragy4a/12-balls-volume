'use strict'

const AMOUNT_BALLS = 12;

const DIAMETR_SMALLEST = 0.5;

const WALL_THICKNESS = 0.01;

const V_SMALLEST = (4 / 3) * Math.PI * Math.pow(DIAMETR_SMALLEST / 2, 3);

const V = [V_SMALLEST];
for (let i = 0; i < AMOUNT_BALLS; i++) {
  const diameter = DIAMETR_SMALLEST + WALL_THICKNESS * i;
  const volume = (4 / 3) * Math.PI * Math.pow(diameter / 2, 3);
  V.push(volume);
}

let totalVolume = 0;
for (let i = 1; i < AMOUNT_BALLS + 1; i++) {
  console.log(`V${i}      `,V[i]);
  totalVolume += V[i];
}

console.log('Summary: ', totalVolume)
