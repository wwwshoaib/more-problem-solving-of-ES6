
const calculateCartTotal = (cart) => {
    const totalPrice =  cart.reduce((accumulator, element) => {
        return accumulator + (element.price * element.qty);
    }, 0)
    return totalPrice;
}


const cart = [
    {name: 'Eraser', price: 15, qty: 4 },
    {name: 'Pen', price: 5, qty: 8 },

] 


console.log(calculateCartTotal(cart))


