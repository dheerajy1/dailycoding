function* idGenerator() {
    let id = 1
 while (true){
    yield id
    id++
 }
}

export const generator = idGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

