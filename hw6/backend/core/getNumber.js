let number;

const genNumber = () => {
    number = Math.floor(Math.random() * 100);
}

const getNumber = () => {
    return number;
}

export { genNumber, getNumber };