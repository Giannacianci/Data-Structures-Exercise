// ARRAY BASICS

let cryptids = [];
console.log(cryptids);//[]

cryptids = [`Bigfoot`, `Moth Man`, `Slenderman`];
console.log(cryptids);

cryptids = [1, 2, 3];
console.log(cryptids); // [ 1, 2, 3 ]

// Length Property
console.log(`Chupacabra`.length); // 10
console.log(cryptids.length);// 3

// Index
console.log(`096`[1]); // 9
console.log(cryptids[2]);// slenderman

console.log(cryptids); // [ 'Bigfoot', 'Moth Man', 'Slenderman' ]

cryptids[0] = `Grafton`;
console.log(cryptids);// [ 'Grafton', 'Moth Man', 'Slenderman' ]

cryptids[3] = `Jersey Devil`;
console.log(cryptids); // [ 'Grafton', 'Moth Man', 'Slenderman', 'Jersey Devil' ]

cryptids[5] = `Medusa`;
console.log(cryptids);
/*
[
  'Grafton',
  'Moth Man',
  'Slenderman',
  'Jersey Devil',
  <1 empty item>,
  'Medusa'
]
*/

const randomArray = [42, `Hello`, true, null];

const otherCryptids = [
    `Lochness Monster`,
    `Hopkinsville Goblin`,
    `Jacolop`,
    `Wendigo`
  ];

 // Same as above
// const otherCryptids = [`Lochness Monster`,`Hopkinsville Goblin`,`Jacolop`,`Wendigo`]; 



















