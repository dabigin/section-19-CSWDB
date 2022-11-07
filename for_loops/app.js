// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");

// For Loop that outputs 1-10 numbers in console.log
// for (let num = 1; num <= 10; num++) {
//   console.log(num);
// }

// For Loop that outputs 0-20 by adding 2 to i variable and printing in console
//
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// For loop that counts down from 100 by 10 each time
//
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// For loop that starts at 10 and multiplies by ten each time, until reaching 1000
// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

//example of an infinite loop
// DO NOT RUN THIS!!!!!
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }

// Nested Loops
//
// for (let i = 0; i <= 10; i++) {
//   console.log(`i is ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`    j is: ${j}`);
//   }
// }

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffery", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
