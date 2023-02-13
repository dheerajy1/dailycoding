console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

console.log(Math.abs(0.1 - 0.2) < (0.3).EPSILON);

function areTheNumbersAlmostEqual(num1p2, num) {
  console.log(Number.EPSILON);
  console.log(num1p2);
  console.log(num);

  return Math.abs(num1p2 - num) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
