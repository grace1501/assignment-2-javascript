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
// Week 0: 20 plants

let prunedDecision = "Let's prune the plants, they are exceeding the capacity of the garden."
let monitoredDecision = "It's ok for now, the plants are growing at an acceptable rate."
let plantedDecision = "There is room to plant more plants."


// Result after 1 week
let plantNumberAfter1Week = startPlantNumber*(2**1);
console.log(`After 1 week, the total plant number is: ${plantNumberAfter1Week}`)
let growingRatio = (plantNumberAfter1Week * plantSpace) / totalGardenArea;

if ( growingRatio < 0.5) {
    console.log(plantedDecision);
} else if (growingRatio <= 0.8) {
    console.log(monitoredDecision)
} else {
    console.log(prunedDecision);
}

// Result after 2 weeks
let plantNumberAfter2Week = startPlantNumber*(2**2);
console.log(`After 2 weeks, the total plant number is: ${plantNumberAfter2Week}`)
growingRatio = (plantNumberAfter2Week * plantSpace) / totalGardenArea;

if ( growingRatio < 0.5) {
    console.log(plantedDecision);
} else if (growingRatio <= 0.8) {
    console.log(monitoredDecision)
} else {
    console.log(prunedDecision);
}

// Result after 3 weeks
let plantNumberAfter3Week = startPlantNumber*(2**3);
console.log(`After 3 weeks, the total plant number is: ${plantNumberAfter3Week}`)
growingRatio = (plantNumberAfter3Week * plantSpace) / totalGardenArea;

if ( growingRatio < 0.5) {
    console.log(plantedDecision);
} else if (growingRatio <= 0.8) {
    console.log(monitoredDecision)
} else {
    console.log(prunedDecision);
}


// Part 2: Thinking Bigger
const startPlantNumber100 = 100;
const plantNumberAfter10Week = startPlantNumber100*(2**10);
console.log(`After 10 weeks, the total plant number is: ${plantNumberAfter10Week}`)

const plantSpaceAfter10Week = plantNumberAfter10Week*0.8;
let additionalSpace = plantSpaceAfter10Week - totalGardenArea;
console.log(`The additional space required is: ${additionalSpace} square meters.`);

let expandedGardenRadius = Math.sqrt(plantSpaceAfter10Week / PI);
console.log(`If the space remained circular, the radius of this expanded garden would be: ${expandedGardenRadius} meters.`);


// Part 3: Errors in Judgement
try {
    if (startPlantNumber100*0.8 <= totalGardenArea){
        console.log("Good job, keep going!");
    }
    else {
        throw "There are too many plants to start in this garden space."
    }
} catch (error) {
    console.log(error);
} finally {
    console.log(`The required space for that 100 plants is ${startPlantNumber100*0.8} square meters in the garden of ${totalGardenArea} square meters.`)
}