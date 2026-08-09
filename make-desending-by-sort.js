
//sorting in descending order , do not change may array , should remain immutable


const makeDescendingOrder = (numbers) => {

    const numbers2 = [...numbers];
    const sortedNumbers = numbers2.sort((a, b) => b - a);

    return sortedNumbers;

}


const numbers = [33, 2, 900, 22];
console.log(makeDescendingOrder(numbers));

