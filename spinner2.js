// CODE BEFORE REFACTOR 
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// // completing the circle
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);


// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 1000)

// CODE AFTER REFACTOR
const characters = "|/-\\|/" 
let count = 0 
const circle = function () {
  for (let character of characters) {
    setTimeout(() => {
      process.stdout.write(`\r${character}  `);
    }, count)
     count+=200
  }

};

circle()
