// While loop of count going from 1 to 10
// BE CAREFUL! ITS EASY TO CREATE AN INFINITE LOOP
// WHILE WHILE LOOPING
//
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }
// For Loop of the above While Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Password Prompt While loop
//
// const SECRET = "BabyHippo";

// let guess = prompt("enter the seret code...");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// Example of how BREAK works
// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!");

for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
