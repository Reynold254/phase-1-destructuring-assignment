// Given Variables
const farmAnimals = "cow horse sheep pig chicken";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Destructure based on animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");
console.log(moo, neigh, baa, oink, cluck); // cow horse sheep pig chicken

// 2. Assign four animals, leaving out horse
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");
console.log(bessie, dolly, babe, little); // cow sheep pig chicken

// 3. Assign three animals with color-based names, leaving out chicken
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");
console.log(blackAndWhite, black, pink); // cow sheep pig

// Arrays

// 4. Destructure color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red, orange, yellow, green, blue, indigo, violet);

// 5. Destructure color names, skipping indigo
const [r, o, y, g, b, , v] = colors;
console.log(r, o, y, g, b, v); // red orange yellow green blue violet

// 6. Assign only indigo using indg
const [, , , , , indg] = colors;
console.log(indg); // indigo

// Objects

// 7. Destructure all muppet properties
const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner);

// 8. Destructure songs 2 and 4, Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

console.log(song2, song4, nestedJob, nestedPartner);
