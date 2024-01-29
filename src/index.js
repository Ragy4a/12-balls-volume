'use strict'

const amountBalls = 12;
const initialDiameter = 0.5;
const wallThickness = 0.01; 

function calculatevolume(amountBalls, initialDiameter, wallThickness) {
    let totalVolume = 0;
  
    let currentDiameter = initialDiameter;
    for (let i = 0; i < amountBalls; i++) {
      const radius = currentDiameter / 2;
      const innerRadius = radius - wallThickness;
      const innerVolume = (4/3) * Math.PI * (innerRadius ** 3);
      const outerVolume = (4/3) * Math.PI * (radius ** 3);
      const shellVolume = outerVolume - innerVolume;
      totalVolume += shellVolume;
  
      currentDiameter += 2 * wallThickness;
    }
  
    return totalVolume;
  }

var result = calculatevolume(amountBalls, initialDiameter, wallThickness);

console.log(`Summary: ${result} cubic meters`);