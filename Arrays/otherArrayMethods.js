// OTHER ARRAY METHODS

// Concat
const amazonLOTR = [`The Rings of Power`];
const theHobbit = [
  `An Unexpected Journey`,
  `The Desolation of Smaug`,
  `The Battle of the Five Armies`
];
const lotr = [
  `The Fellowship of the Ring`,
  `The Two Towers`,
  `The Return of the King`
];

const allLOTR = amazonLOTR.concat(theHobbit, lotr);
console.log(allLOTR);
/*
[
  'The Rings of Power',
  'An Unexpected Journey',
  'The Desolation of Smaug',
  'The Battle of the Five Armies',
  'The Fellowship of the Ring',
  'The Two Towers',
  'The Return of the King'
]
*/
console.log(amazonLOTR); // [ 'The Rings of Power' ]

// Index Of
const villainIndex = `Sauron`.indexOf(`u`);
console.log(villainIndex); // 2

const movieIndex = allLOTR.indexOf(`The Two Towers`);
console.log(movieIndex); // 5

// Sort
const randomArray = [`B`, `A`, `Hello`, 20, 1];
randomArray.sort();
console.log(randomArray);//[ 1, 20, 'A', 'B', 'Hello' ]

// Includes
const includes1 = allLOTR.includes(`The Return of the King`);
console.log(includes1);

const includes2 = allLOTR.includes(`Towers`);
console.log(includes2);// false

// Reverse
allLOTR.reverse();
console.log(allLOTR);
/*
[
  'The Return of the King',
  'The Two Towers',
  'The Fellowship of the Ring',
  'The Battle of the Five Armies',
  'The Desolation of Smaug',
  'An Unexpected Journey',
  'The Rings of Power'
]
*/

// Join
const people = [`Men`, `Elves`, `Wizards`, `Orcs`, `Trolls`, `Dwarfs`, `Hobbits`, `Ents`];
const peopleString1 = people.join(` `);
console.log(peopleString1);// Men Elves Wizards Orcs Trolls Dwarfs Hobbits Ents

const peopleString2 = people.join();
console.log(peopleString2); // Men,Elves,Wizards,Orcs,Trolls,Dwarfs,Hobbits,Ents

// Slice
const land = `Middle Earth`.slice(0, 6);
console.log(land);//Middle
// Example of Slice on an Array
const locations = [
  `Mordor`,
  `The Shire`,
  `Hobbiton`
];
// NOTE: If a second number is NOT included, then Slice will return the item at the specified starting index as well as all items that follow
const hobbitLocations = locations.slice(1);
// const hobbitLocations = locations.slice(1, 3);
console.log(hobbitLocations); // [ 'The Shire', 'Hobbiton' ]

// Splice (Removes, Replaces, or Adds item(s) to an Array)
// First position determines the starting index. Second position determines how many items to remove starting from the starting index. Third position and on are optional positions that determine the value(s) being added at that/those index(es).

/*
Syntax Example for Splice

array.splice(Starting Index, Number of Indexes/Items to Remove, Added Item Value(s))
*/

const hobbits = [
  `Bilbo Baggins`,
  `Samwise Gamgee`,
  `Frodo Baggins`,
  `Smeagol`
];

// Removing with Splice
// NOTE: The array item(s) removed are always returned as an array
const removedHobbits1 = hobbits.splice(2, 2);
console.log(hobbits); // [ 'Bilbo Baggins', 'Samwise Gamgee' ]
console.log(removedHobbits1); // [ 'Frodo Baggins', 'Smeagol' ]

// [ 'Bilbo Baggins', 'Samwise Gamgee' ]

// Replacing with Splice
// NOTE: New value is added at the specified for the starting index
const removedHobbits2 = hobbits.splice(1, 1, `Pippin Took`, `Ted Sandyman`);
console.log(hobbits); // [ 'Bilbo Baggins', 'Pippin Took', 'Ted Sandyman' ]
console.log(removedHobbits2); // [ 'Samwise Gamgee' ]

// [ 'Bilbo Baggins', 'Pippin Took', 'Ted Sandyman' ]

// Adding with Splice
// NOTE: If there is an item at the specified starting index, then it will be shifted to the right (AKA The next index)
const removedHobbits3 = hobbits.splice(2, 0, `Tom Bombadil`);
console.log(hobbits); // [ 'Bilbo Baggins', 'Pippin Took', 'Tom Bombadil', 'Ted Sandyman' ]

// NOTE: If no items are removed (AKA The second position/number is 0), then the value returned will be an empty array
console.log(removedHobbits3); // []


