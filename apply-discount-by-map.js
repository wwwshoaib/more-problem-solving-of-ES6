
const applyDiscount = (prices, discountRate = 0) => {
    let pricesAfterDiscount = prices.map((price) => {
        const discountedPrice = price - (price*(discountRate/100));
        return discountedPrice;
    })
    return pricesAfterDiscount;
}


const productPrices = [300, 5000, 400, 200];
console.log(applyDiscount(productPrices, 10));