function getRandomNumberBetween(min, max) {
    let randomValue = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(`Method: Random Element from Range`);
    console.log(`Range from ${min} to ${max}: ${randomValue}`);
    console.log(`----------------------------------------------------------\n`);
    return randomValue;
}

function getRandomElementFromArray(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Method: Random Element from Array`);
    console.log(`Whole array: ${arr}`);
    console.log(`Random Index: ${randomIndex} - Element: ${arr[randomIndex]}`);
    console.log(`----------------------------------------------------------\n`);
    return arr[randomIndex];
}

module.exports = { getRandomElementFromArray, getRandomNumberBetween };