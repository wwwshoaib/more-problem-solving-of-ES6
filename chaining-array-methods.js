//Calculate total of highest price products using chaining of array methods
//filter, map, reduce

const calculateHighestTotal = (cart, minPrice) => {
    let filteredProducts = cart.filter((product) => product.price >= minPrice);
    
return filteredProducts;

}




const cart = [
    {name: 'Eraser', price: 15, qty: 4 },
    {name: 'Pen', price: 5, qty: 8 },
    {name: 'Pencil', price: 10, qty: 5 },

] 


console.log(calculateHighestTotal(cart))

