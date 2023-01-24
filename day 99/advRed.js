const numbers = [13, 2, 5, , 6];
const sum = numbers.reduce((total, number, index, array) => {
  return total + number;
});
console.log(sum);
