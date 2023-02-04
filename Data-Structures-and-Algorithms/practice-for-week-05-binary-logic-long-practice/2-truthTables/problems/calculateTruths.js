const { or, and, calculateTruthTable } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

let case1 = (A, B) => {
    let notA = !A;
    let aAndb = and(A, B)
    return Number(or(notA, aAndb))
};

let case2 = (A, B) => {
    let notA = !A;
    return Number(or(notA, B))
}

let case3 = (A, B) => {
    let notB = !B;
    let aAndNotB = and(A, notB);

    return Number(!aAndNotB)
}

let case4 = (A, B) => {
    let notB = !B;
    let AorNotB = or(A, notB);
    return Number(!(AorNotB))
}

let case5 = (A, B) => {
    return Number(or(A, !A));
}

let case6 = (A, B) => {
    return Number(and(B, !B));
}
let case7 = (A,B,C) => {
    let aAndb = and(A,B);
    let notC = !C;
    return Number(or(aAndb, notC));
}

let case8 = (A,B,C) =>{
    let notA = !A;
    let bAndC = and(B,C);

    return Number(or(notA, bAndC))
}
// Update arguments to calculate and console.log returned value

//case 1
console.log('A  B   !A || (A && B) \n---------------------------')
console.log(`0  0   ${case1(0, 0)} `)
console.log(`0  1   ${case1(0, 1)} `)
console.log(`1  0   ${case1(1, 0)} `)
console.log(`1  1   ${case1(1, 1)} `)

console.log("\n")
//case 2
console.log('A  B    B || !A \n---------------------------')
console.log(`0  0   ${case2(0, 0)} `)
console.log(`0  1   ${case2(0, 1)} `)
console.log(`1  0   ${case2(1, 0)} `)
console.log(`1  1   ${case2(1, 1)} `)

console.log("\n")
//case 3
console.log('A  B    !(A && !B) \n---------------------------')
console.log(`0  0   ${case3(0, 0)} `)
console.log(`0  1   ${case3(0, 1)} `)
console.log(`1  0   ${case3(1, 0)} `)
console.log(`1  1   ${case3(1, 1)} `)
console.log("\n")
//case 4
console.log('A  B    !(A || !B) \n---------------------------')
console.log(`0  0   ${case4(0, 0)} `)
console.log(`0  1   ${case4(0, 1)} `)
console.log(`1  0   ${case4(1, 0)} `)
console.log(`1  1   ${case4(1, 1)} `)
console.log("\n")
//case 5
console.log('A  B    A || !A \n---------------------------')
console.log(`0  0   ${case5(0, 0)} `)
console.log(`0  1   ${case5(0, 1)} `)
console.log(`1  0   ${case5(1, 0)} `)
console.log(`1  1   ${case5(1, 1)} `)
console.log("\n")
//case 6
console.log('A  B    B && !B \n---------------------------')
console.log(`0  0   ${case6(0, 0)} `)
console.log(`0  1   ${case6(0, 1)} `)
console.log(`1  0   ${case6(1, 0)} `)
console.log(`1  1   ${case6(1, 1)} `)
console.log("\n")
//case 7
console.log('A  B  C    A && B || !C \n---------------------------')
console.log(`0  0  0   ${case7(0, 0, 0)} `)
console.log(`0  0  1   ${case7(0, 0, 1)} `)
console.log(`0  1  0   ${case7(0, 1, 0)} `)
console.log(`0  1  1   ${case7(0, 1, 1)} `)
console.log(`1  0  0   ${case7(1, 0, 0)} `)
console.log(`1  0  1   ${case7(1, 0, 1)} `)
console.log(`1  1  0   ${case7(1, 1, 0)} `)
console.log(`1  1  1   ${case7(1, 1, 1)} `)
console.log("\n")
//case 8
console.log('A  B  C    !A || (B && C) \n---------------------------')
console.log(`0  0  0   ${case8(0, 0, 0)} `)
console.log(`0  0  1   ${case8(0, 0, 1)} `)
console.log(`0  1  0   ${case8(0, 1, 0)} `)
console.log(`0  1  1   ${case8(0, 1, 1)} `)
console.log(`1  0  0   ${case8(1, 0, 0)} `)
console.log(`1  0  1   ${case8(1, 0, 1)} `)
console.log(`1  1  0   ${case8(1, 1, 0)} `)
console.log(`1  1  1   ${case8(1, 1, 1)} `)
