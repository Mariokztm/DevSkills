// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM
// We work for a company building a smart home thermomether.
// Our most recent task is this: "Given an array of temperature of one day,
// calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperat ure amplitude? Is the difference between the highest and the lowest temps.
// - How to compute the max and min temperatures?
// - What does a sensor erros looks like? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min for max (amplitude) and return it

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 7, 4], [9, 0, 5, -3]);
// const amplitude = calcTempAmplitudeNew(temperatures);
console.log(amplitudeNew);

//Function now should receive 2 temp arrays

// 1) Undestanding the problem
// -  With 232 arrays, wee should implement a functionality twice?  NO!
// Just merge two arrays.

// 2) Breakiuing up into sub-problems,
// -  Merge 2 arrays
