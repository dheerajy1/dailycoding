function queryAll(param,...values){
    const string = values.reduce((previousValue,currentValue,currentIndex)=>{
        return `${previousValue}${currentValue}${param[currentIndex+1]}`
    },param[0])
    return document.querySelectorAll(string)
}


const firstName = "kyle"
const hobby = "weight lifting"
console.log(queryAll`div`)


