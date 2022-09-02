// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//PSEUDO Code:
    // create describe function. Call it firstItem.
    // create the it function with the description "Create a function that takes in an array, removes the first item from the array and shuffles the remaining content"
    //state desired outcomes with expect statements contained declared variables

describe ("firstItem", () => {
    
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    
    it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
            expect(firstItem(colors1)).toEqual(expect.not.arrayContaining(["yellow", "blue", "pink", "green"]))
            expect(firstItem(colors2)).toEqual(expect.not.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })

})
//Test failed due to firstItem fuuction not being defined

// FAIL  ./code-challenges.test.js
// firstItem
//   ✕ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content

// ● firstItem › Create a function that takes in an array, removes the first item from the array and shuffles the remaining content

//   ReferenceError: firstItem is not defined

//     25 |     
//     26 |     it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
//   > 27 |             expect(firstItem(colors1)).toEqual(expect.array(["yellow", "blue", "pink", "green"]))
//        |             ^
//     28 |             expect(firstItem(colors2)).toEqual(expect.array(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//     29 |     })
//     30 |

//     at Object.expect (code-challenges.test.js:27:13)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.173 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// b) Create the function that makes the test pass.

const firstItem = (colors1, colors2)  => {
    //declare new array
    let array = []

    //create for loop
    for (let i = array.length -1; i > 0; i--) {
        const rand = math.floor(math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    //create return with desired output
    return firstItem
}


//Test Passed:

// $ /Users/learnacademy/Desktop/week-4-assessment-rgilliam83/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   firstItem
//     ✓ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.117 s
// Ran all test suites.
// ✨  Done in 0.44s.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.
//PSEUDO Code:
    // create describe function. Call it voteTally.
    // create the it function with the description "Create a function that takes in an object that contains up votes and down votes and returns the net total of votes"
    //state desired outcomes with expect statements contained declared variables
describe("voteTally", () => {

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

it("Create a function that takes in an object that contains up votes and down votes and returns the net total of votes" , () =>{
    expect(voteTally(votes1)).toEqual((11))
    expect(voteTally(votes2)).toEqual((-31))
})

})

//Test failed due to firstItem fuuction not being defined

// FAIL  ./code-challenges.test.js
// firstItem
//   ✓ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
// voteTally
//   ✕ Create a function that takes in an object that contains up votes and down votes and returns the net total of votes

// ● voteTally › Create a function that takes in an object that contains up votes and down votes and returns the net total of votes

//   ReferenceError: voteTally is not defined

//     109 |
//     110 | it("Create a function that takes in an object that contains up votes and down votes and returns the net total of votes" , () =>{
//   > 111 |     expect(voteTally(votes1)).toEqual((11))
//         |     ^
//     112 |     expect(voteTally(votes1)).toEqual((-31))
//     113 | })
//     114 |

//     at Object.expect (code-challenges.test.js:111:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.179 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

function voteTally(number) {
    return number.upVotes - number.downVotes
      }
//Test Passed:

// PASS  ./code-challenges.test.js
// firstItem
//   ✓ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
// voteTally
//   ✓ Create a function that takes in an object that contains up votes and down votes and returns the net total of votes

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.165 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.48s.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//PSEUDO Code:
    // create describe function. Call it noDuplicate.
    // create the it function with the description "Create a function that takes in two arrays as arguments and returns one array with no duplicate values"
    // state desired outcomes with expect statements contained declared variables

    describe("noDuplicate", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

        it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
            expect(noDuplicate(dataArray1,dataArray2)).toEqual((["array", "object", "number", "string", "Boolean", "null", "undefined"]))

        })

    })

    //Test failed due to firstItem fuuction not being defined
//     FAIL  ./code-challenges.test.js
//     firstItem
//       ✓ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
//     voteTally
//       ✓ Create a function that takes in an object that contains up votes and down votes and returns the net total of votes
//     noDuplicate
//       ✕ Create a function that takes in two arrays as arguments and returns one array with no duplicate values
  
//     ● noDuplicate › Create a function that takes in two arrays as arguments and returns one array with no duplicate values
  
//       ReferenceError: noDuplicate is not defined
  
//         187 |
//         188 |         it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
//       > 189 |             expect(noDuplicate(dataArray1+dataArray2)).toEqual((["array", "object", "number", "string", "Boolean", "null", "undefined"]))
//             |             ^
//         190 |
//         191 |         })
//         192 |
  
//         at Object.expect (code-challenges.test.js:189:13)
  
//   Test Suites: 1 failed, 1 total
//   Tests:       1 failed, 2 passed, 3 total
//   Snapshots:   0 total
//   Time:        0.131 s, estimated 1 s
//   Ran all test suites.
//   error Command failed with exit code 1.
//   info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

const noDuplicate = (arr1,arr2) => {
    newArr = [...new Set([...arr1, ...arr2])]
      return newArr
  }

//   // PASS  ./code-challenges.test.js
//   firstItem
//   ✓ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
// voteTally
//   ✓ Create a function that takes in an object that contains up votes and down votes and returns the net total of votes
// noDuplicate
//   ✓ Create a function that takes in two arrays as arguments and returns one array with no duplicate values

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.62s.