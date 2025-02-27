// MAIN ARRAY METHODS

const gotg = [
    `Starlord`,
    `Gamora`,
    `Groot`,
    `Rocket`
  ];
  console.log(gotg);
  
  // PUSH
const arrayNum1 = gotg.push(`Mantis`);
console.log(gotg);// [ 'Starlord', 'Gamora', 'Groot', 'Rocket', 'Mantis' ]
console.log(arrayNum1);// 5

// POP
const guardian1 = gotg.pop();
console.log(gotg); // [ 'Starlord', 'Gamora', 'Groot', 'Rocket' ]
console.log(guardian1); // Mantis

// SHIFT
const guardian2 = gotg.shift();
console.log(gotg); // [ 'Gamora', 'Groot', 'Rocket' ]
console.log(guardian2); // Starlord

// UNSHIFT
const arrayNum2 = gotg.unshift(`Drax`);
console.log(gotg); // [ 'Drax', 'Gamora', 'Groot', 'Rocket' ]
console.log(arrayNum2); // 4




