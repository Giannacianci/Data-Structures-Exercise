//OBJECTS
/*
Syntax Example

{key: value}
*/

// Example 1
const user = { firstName: `Matt`, lastName: `Riley`};

// Example 2
const userInfo = {
  username: `MattJRiley14`,
  first: `Matt`,
  last: `Riley`,
  age: 37,
  loggedIn: true
};

// ACCESSING VALUES IN AN OBJECT
console.log(userInfo[`username`]); // MattJRiley14
console.log(userInfo[`age`]); // 37

console.log(userInfo.first); // Matt
console.log(userInfo.loggedIn); // true

const theRock = {
  firstName: `Dwayne`,
  lastName: `Johnson`,
  age: 52,
  goodActor: true,
  bestMovie: `Jumanji`
}

theRock[`bestMovie`] = `Moana`;
console.log(theRock[`bestMovie`]); // Moana
console.log(theRock);
/*
{
  firstName: 'Dwayne',
  lastName: 'Johnson',
  age: 52,
  goodActor: true,
  bestMovie: 'Moana'
}
*/


theRock.bestMovie = `San Andreas`;
console.log(theRock.bestMovie); // San Andreas
console.log(theRock);
/*
{
  firstName: 'Dwayne',
  lastName: 'Johnson',
  age: 52,
  goodActor: true,
  bestMovie: 'San Andreas'
}
*/


// ADDING
theRock[`highestGrossingMovie`] = `Furious 7`;
console.log(theRock[`highestGrossingMovie`]); // Furious 7
/*{
  firstName: 'Dwayne',
  lastName: 'Johnson',
  age: 52,
  goodActor: true,
  bestMovie: 'San Andreas',
  highestGrossingMovie: 'Furious 7'
}
*/

theRock.worstMovie = `Doom`;
console.log(theRock.worstMovie); // Doom
console.log(theRock);

/*
{
  firstName: 'Dwayne',
  lastName: 'Johnson',
  age: 52,
  goodActor: true,
  bestMovie: 'San Andreas',
  highestGrossingMovie: 'Furious 7',
  worstMovie: 'Doom'
}
*/




