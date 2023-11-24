// Part 1: Growing Pains

// The area in which the plants are contained is circular, with a radius of 5 meters.
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

const PI = 3.1415;
// const area = PI * radius * radius;

const gardenRadius = 5;
const totalGardenArea = PI * gardenRadius * gardenRadius;

const plantSpace = 0.8;

const startPlantNumber = 20;
let plantNumberAfterNWeek;

let prunedDecision = "Let's prune the plants, they are exceeding the capacity of the garden."
let monitoredDecision = "It's ok for now, the plants are growing at an acceptable rate."
let plantedDecision = "There is room to plant more plants."

// Result AFTER 1 WEEK
plantNumberAfterNWeek = startPlantNumber*2;
console.log(`After 1 week, the total plant number is: ${plantNumberAfterNWeek}`)
let growingRatio = (plantNumberAfterNWeek * plantSpace) / totalGardenArea;

if ( growingRatio < 0.5) {
    console.log(plantedDecision);
} else if (growingRatio <= 0.8) {
    console.log(monitoredDecision)
} else {
    console.log(prunedDecision);
}
