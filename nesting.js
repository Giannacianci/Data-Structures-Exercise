// NESTING WITH DATA STRUCTURES

// Array Nesting
const pixarMovies = [
  [`Wall-E`, `The Incredibles`],
  [`Soul`, `Ratatouille`],
  [
    [`Brave`, `Bolt`],
    `Cars`, `Toy Story`, `Finding Nemo`
  ]
];

console.log(pixarMovies[0]); // [ 'Wall-E', 'The Incredibles' ]
console.log(pixarMovies[1][0]); // Soul
// pixarMovies[1][0]
// [`Soul`, `Ratatouille`][0]
// `Soul`
console.log(pixarMovies[2][0][1]); // Bolt
// pixarMovies[2][0][1]
// [[`Brave`, `Bolt`],`Cars`, `Toy Story`, `Finding Nemo`][0][1]
// [`Brave`, `Bolt`][1]
// `Bolt`

// Object Nesting
const toyStory = {
  main: {
    buzzLightyear: `Tim Allen`,
    sheriffWoody: `Tom Hanks`
  },
  other: {
    mrPotatoHead: `Don Rickles`,
    slinky: `Jim Varney`,
    jesse: `Joan Cusack`
  }
};
console.log(toyStory[`other`][`slinky`]); // Jim Varney
// toyStory[`other`][`slinky`]
// {mrPotatoHead: `Don Rickles`,slinky: `Jim Varney`,jesse: `Joan Cusack`}[`slinky`]
// `Jim Varney`

console.log(toyStory.main.buzzLightyear); // Tim Allen
// toyStory.main.buzzLightyear
// {buzzLightyear: `Tim Allen`,sheriffWoody: `Tom Hanks`}.buzzLightyear
// `Tim Allen`

// Mix of Array and Object Nesting
const monstersInc = {
  main: [
    `Mike Wazowski`,
    `James P Sullivan`
  ],
  other: [
    `Randal`,
    `Boo`,
    `Roz`
  ]
};
console.log(monstersInc.main[0]); // Mike Wazowski
// monstersInc.main[0]
// [`Mike Wazowski`,`James P Sullivan`][0]
// `Mike Wazowski`

const findingMovies = [
  {
    title: `Finding Nemo`,
    year: 2003
  },
  {
    title: `Finding Dory`,
    year: 2016
  }
];
console.log(findingMovies[0].title); // Finding Nemo
// {title: `Finding Nemo`,year: 2003}.title
// `Finding Nemo`

console.log(findingMovies[1].year); // 2016
// findingMovies[1].year
// {title: `Finding Dory`,year: 2016}.year
// 2016