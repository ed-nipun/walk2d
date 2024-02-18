let rowColCount;
// hari dan mama empty world ekak hadanna ona

const world = [];
function makeEmptyWorld(count) {
  rowColCount = count;

  for (let i = 0; i < count; i++) {
    world.push(" ".repeat(count).split(""));
    console.log(world[i]);
  }
}

makeEmptyWorld(3);

function updateWorld() {
  for (let i = 0; i < rowColCount; i++) {
    console.log(world[i]);
  }
}

const writeChar = (world, row, col, char) => {
  world[row][col] = char;
};

// hari dan mama worldArr eke hari meda hoyaganna ona

// kohomada mama eka karanne?

let middleIndex = Math.floor(rowColCount / 2);

// hari dan meda hoyagaththa. dan mama meka worldArr eke mark karanna ona

console.log(`player joined...`);

world[middleIndex][middleIndex] = "P";

updateWorld();

// hari dan wede ok. dan mata karanna thiyenne user gen input ekak ganna eka

var readlineSync = require("readline-sync");

let row = middleIndex;
let col = middleIndex;

while (true) {
  var input = readlineSync.question("\n\nWhere do you wanna move? ");

  // hari dan user ge input ekak gaththa. dan mama e input eka anuwa player ge
  // position eka change karanna ona

  // mulinma player dan inna thena empty karaganna

  writeChar(world, row, col, " ");

  // hari dan player dunne right nam += 1

  if (input === "right" && col < rowColCount - 1) {
    
    col += 1;
  } else if (input === "left" && col > 0) {
    col -= 1;
  } else if (input === "up" && row > 0) {
    row -= 1;
  } else if (input === "down" && row < rowColCount - 1) {
    row += 1;
  } else if (input === "exit") {
    break;
  } else {
    console.log(`sorry cant move to ${input}`);
  }

  // dan me position ekata player wa set karanna ona

  writeChar(world, row, col, "P");
  // hari dan worldArr eka view karamu
  updateWorld();
}

console.log("thanks for playing...");
