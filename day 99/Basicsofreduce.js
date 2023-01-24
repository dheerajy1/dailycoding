const items = [
    {name: "Carrot", price: 48},
    {name: "Orange", price: 65},
    {name: "Guava", price: 41},
    {name: "Blueberry ", price: 198},
]
const totalPrice = items.reduce((total,{price:data})=>total+data,0)
console.log(totalPrice)