
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