//Calculate total of highest price products using chaining of array methods
//filter, map, reduce

const calculateHighestTotal = (cart, minPrice) => {
    let total = cart
    .filter((product) => product.price >= minPrice)
    .map(product => product.price * product.qty)
    .reduce((accumulator, currentValue ) => accumulator + currentValue)
    return total;
}




const cart = [
    {name: 'Eraser', price: 15, qty: 4 },
    {name: 'Pen', price: 4, qty: 8 },
    {name: 'Pencil', price: 10, qty: 5 },

] 


console.log(calculateHighestTotal(cart, 5))

