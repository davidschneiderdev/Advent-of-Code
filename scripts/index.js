
const massArray = [70904,
    66770,
    118678,
    58460,
    128566,
    60820,
    107153,
    113196,
    52413,
    118335,
    96711,
    88120,
    129744,
    64049,
    90586,
    54466,
    55693,
    102407,
    148273,
    110281,
    111814,
    60951,
    102879,
    135253,
    130081,
    86645,
    72934,
    147097,
    74578,
    124073,
    100003,
    103314,
    86468,
    84557,
    94232,
    120012,
    64372,
    143081,
    96664,
    148076,
    147357,
    139897,
    113139,
    143022,
    144298,
    81293,
    53679,
    139311,
    107156,
    121730,
    132519,
    132666,
    80464,
    111118,
    76734,
    139023,
    111287,
    126811,
    130539,
    129173,
    67549,
    102058,
    72673,
    91194,
    64753,
    59488,
    126300,
    94407,
    126813,
    60028,
    95129,
    79270,
    123465,
    60966,
    111920,
    76549,
    110195,
    119975,
    112557,
    129676,
    104941,
    89583,
    121895,
    108901,
    135247,
    75129,
    148646,
    131128,
    78931,
    111637,
    72752,
    140761,
    57387,
    85684,
    77596,
    134159,
    63031,
    148361,
    133856,
    82022,
];

function fuelRequirement(massArray) {
    let sum = 0;
    for (let mass of massArray) {
        fuel = Math.floor(mass/3) - 2;
        sum += fuel;
        }
    return sum;
    } 

// console.log(fuelRequirement(massArray));

function needsAdditionFuel(fuel) {
    if (Math.floor(fuel/3) - 2 <= 0) {
        return false;
    } else {
        return true;
    }
}

console.log(needsAdditionFuel(2));

function calculateNegativeFuel(fuel) {
    return Math.floor(fuel/3) - 2;
}



console.log(calculateNegativeFuel(100756));

// write helper function to calculate negative fuel

function fuelRequirement(massArray) {
    let sum = 0;
    for (let mass of massArray) {
        fuel = Math.floor(mass/3) - 2;
        sum += fuel;
        }
    return sum;
    }



    
// function addedFuelRequirement(massArray) {
//     let sum = 0;
//     for (let mass of massArray) {
//         let addedFuel = 0;
//         fuel = Math.floor(mass/3) - 2;
//         if (isNegativeFuel(fuel) === false) {
//             fuelUnit = Math.floor(fuel/3) - 2;
//             addedFuel += fuelUnit;
//             if (isNegativeFuel(fuelUnit) === false) {
//                 fuelUnit = Math.floor(fuel/3) - 2;
//                 addedFuel += fuelUnit;
//             }
//         totalFuel = fuel + addedFuel;
//         sum += totalFuel;
//         }
//     }
//     return sum;
// } 

// let testArray = [100756];

// console.log(addedFuelRequirement(testArray));





// console.log(fuelRequirement(massArray));




let code = [2, 5, 8, 12, 15, 20, 4, 21];
let testOne = [1,0,0,0,99];
let testTwo = [2, 3, 0, 3, 99];
let testThree = [2, 4, 4, 5, 99, 0];
let testFour = [1,1,1,4,99,5,6,0,99];

let puzzleInput = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,2,9,23,27,1,6,27,31,1,31,9,35,2,35,10,39,1,5,39,43,2,43,9,47,1,5,47,51,1,51,5,55,1,55,9,59,2,59,13,63,1,63,9,67,1,9,67,71,2,71,10,75,1,75,6,79,2,10,79,83,1,5,83,87,2,87,10,91,1,91,5,95,1,6,95,99,2,99,13,103,1,103,6,107,1,107,5,111,2,6,111,115,1,115,13,119,1,119,2,123,1,5,123,0,99,2,0,14,0];
// console.log(puzzleInput.length);
// Opcode1 function
function opcodeOne(array, inputPositionOne, inputPositionTwo, outputPosition) {
    let sum = array[inputPositionOne] + array[inputPositionTwo];
    array[outputPosition] = sum;
}
// Opcode2 function
function opcodeTwo(array, inputPositionOne, inputPositionTwo, outputPosition) {
    let product = array[inputPositionOne] * array[inputPositionTwo];
    array[outputPosition] = product;
}

function main(array) {

    for (let i = 0; i < array.length; i++) {
        // console.log(i);
        if (array[i] === 99) {
            // console.log("PROGRAM HALTED");
            break;
        }
        else if (array[i] === 1) {
            opcodeOne(array, array[i+1], array[i+2], array[i+3]);
            // console.log(`opcodeOne ran with index ${i}`);
            i += 3;
            // console.log(`new index ${i}`);
            // console.log(array);
        } 
        else if (array[i] === 2) {
            // console.log(`index in opcodeTwo equals ${i}`);
            opcodeTwo(array, array[i+1], array[i+2], array[i+3]);
            // console.log(`opcodeTwo ran with index ${i}`);
            // console.log(`new index ${i}`);
            i += 3;
            // console.log(array);
        }
    }
    return array[0];
}

function nounVerbSim() {
    loop1:
        for (let n = 1; n < 99; n++) {
    loop2:        
            for (let v = 1; v < 99; v++) {
                let iterationArray = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,2,9,23,27,1,6,27,31,1,31,9,35,2,35,10,39,1,5,39,43,2,43,9,47,1,5,47,51,1,51,5,55,1,55,9,59,2,59,13,63,1,63,9,67,1,9,67,71,2,71,10,75,1,75,6,79,2,10,79,83,1,5,83,87,2,87,10,91,1,91,5,95,1,6,95,99,2,99,13,103,1,103,6,107,1,107,5,111,2,6,111,115,1,115,13,119,1,119,2,123,1,5,123,0,99,2,0,14,0];
                // console.log(`Array before`);
                // console.log(iterationArray);
                console.log(`Noun equals ${n}`);
                console.log(`Verb equals ${v}`);
                iterationArray[1] = n;
                iterationArray[2] = v;
                // console.log(`Array before`);
                // console.log(iterationArray);
                let output = main(iterationArray);
                console.log(`Output equals ${output}`);
                iterationArray = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,1,5,19,23,2,9,23,27,1,6,27,31,1,31,9,35,2,35,10,39,1,5,39,43,2,43,9,47,1,5,47,51,1,51,5,55,1,55,9,59,2,59,13,63,1,63,9,67,1,9,67,71,2,71,10,75,1,75,6,79,2,10,79,83,1,5,83,87,2,87,10,91,1,91,5,95,1,6,95,99,2,99,13,103,1,103,6,107,1,107,5,111,2,6,111,115,1,115,13,119,1,119,2,123,1,5,123,0,99,2,0,14,0];
                // console.log(`Array after`);
                // console.log(iterationArray);
                if (output === 19690720) {
                    console.log(`**Output obtained: ${output}. Noun is ${n}. Verb is ${v}.**`);
                    break loop1;
            }
        }
    }
}

// nounVerbSim();

// console.log(testOne);
// main(testOne);
// console.log(testOne);

// console.log(testTwo);
// main(testTwo);
// console.log(testTwo);

// console.log(testThree);
// main(testThree);
// console.log(testThree);

// console.log(testFour);
// main(testFour);
// console.log(testFour);

// console.log(puzzleInput);
// console.log(main(puzzleInput));
// console.log(puzzleInput);
















