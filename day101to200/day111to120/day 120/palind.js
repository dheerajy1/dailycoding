function isPalindrome(str){
    str = str.replace(/\W/g,'').toLowerCase()
    console.log(str);
    console.log(str.split('a'));
    console.log(str.split('').reverse());
    console.log(str.split('').reverse().join(''));
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome('A car, a man, a maraca'))