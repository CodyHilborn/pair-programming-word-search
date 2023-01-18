const transpose = (matrix) => {
  let resultArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    resultArray.push([]);
  }

  for (const col in matrix) {
    for (const row in matrix[col]) {
      resultArray[row][col] = matrix[col][row];
    }
  }

  return resultArray;
};

const lookForWord = (array, word) => {
  for (const l of array) {
    if (l.includes(word)) return true;
  }
  return false;
};


const wordSearch = (letters, word) => {
  const wordUpper = word.toUpperCase();
  const wordUpperReverse = wordUpper.split("").reverse().join("");

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map((ls) => ls.join(""));


  if (
    lookForWord(horizontalJoin, wordUpper) ||
    lookForWord(verticalJoin, wordUpper) ||
    lookForWord(horizontalJoin, wordUpperReverse) ||
    lookForWord(verticalJoin, wordUpperReverse)
  ) {
    return true;
  }
  return false;
};

wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "WIFE"
);

module.exports = wordSearch;