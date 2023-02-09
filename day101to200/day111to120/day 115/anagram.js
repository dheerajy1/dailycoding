const word1 = "mary",
  word2 = "army";

function checkAnagram(w1, w2) {
  w1 = w1.split("").sort().join("");
  w2 = w2.split("").sort().join("");
  console.log(w1, w2);
  return w1 === w2;
}
const log = checkAnagram(word1, word2);

console.log(log);
