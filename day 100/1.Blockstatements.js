const a = 1;

function main() {
  const a = 2;
  console.log(`In Main:${a}`);
}

{
  const a = 3;
  console.log(`In Brackets:${a}`);
}
main();
console.log(`In Global:${a}`);

switch (a) {
  case 9: {
    const result = a * 2;
    console.log(result);
    break;
  }
  case 2: {
    const result = a * 2;
    console.log(result);
    break;
  }
  case 1: {
    const result = a + 2;
    console.log(result);
    break;
  }
}
