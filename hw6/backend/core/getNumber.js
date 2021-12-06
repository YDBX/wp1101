let number;

const genNumber = () => {
    number = Math.floor(Math.random() * 10000);
    number = number.toString(10);
    number = number.padStart(4, '0');
}
// padStart to add 0 before number

const getNumber = () => {
    return number;
}

export { genNumber, getNumber };