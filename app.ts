/* Typescript types
- number (floats and integers)
- string (text)
- boolean (true or false, not all truthy and falsy values)
- object
- array
- tuple fixed number array with defined types
- enum
- any
- function
- unknown
- never
*/

// function add (
//   n1: number,
//   n2: number,
//   showResult: boolean,
//   resultString: string
// ) {
//   const result = n1 + n2
//   //   if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2
//   //   throw new Error('Incorrect input')
//   if (showResult) console.log(resultString + result)
//   else return result
// }

// const number1 = 5
// const number2 = 2.8
// const printResult = true
// const resultPhrase = 'Result is '

// const result = add(number1, number2, printResult, resultPhrase)

// console.log(result)

// const person: { name: string; age: number } = {
//   name: 'Dustin',
//   age: 26
// }

// Better to let typescript infer types
// const person = {
//   name: 'Dustin',
//   age: 26
// }

// const person: {
//   // string
//   name: string
//   // number
//   age: number
//   // string array
//   hobbies: string[]
//   // tuple
//   role: [number, string]
// } = {
//   name: 'Dustin',
//   age: 26,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }
// Throw an error
// person.role[1] = 10
// person.role.push('admin')

// person.role = [0, 'dustin']

// let favoriteActivities: string[]
// favoriteActivities = ['Hockey']

// Enum

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR
// }

// const object = {
//   name: 'Dustin',
//   age: 26,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.READ_ONLY
// }

// console.log(object.role)

// Aliases
// type Combinable = number | string

// // Union types
// function combine (
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: 'as-number' | 'as-text'
// ) {
//   let result
//   if (
//     (typeof input1 === 'number' && typeof input2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +input1 + +input2
//   } else {
//     result = input1.toString() + input2.toString()
//   }
//   if (resultConversion === 'as-number') return +result
//   else return result.toString()
// }

// const combinedAges = combine(30, 26, 'as-number')
// console.log(combinedAges)

// const combinedNames = combine('Max', 'Anna', 'as-text')
// console.log(combinedNames)

// const combinedStringAges = combine('30', '26', 'as-number')
// console.log(combinedStringAges)

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// function addAndHandle(n1: number, n2: number, cb: (numb: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }

// printResult(add(5, 12));

// let combineValues: (a: number, b: number) => number;
// let combineValues2: Function;

// combineValues = add;
// // combineValues = printResult;
// console.log(combineValues(8, 8));

// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput;
if (typeof userInput === "string") userName = userInput;

// Never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);

const button = document.getElementById("button")!;

function clickHandler() {
  console.log("Clicked");
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null));
}
