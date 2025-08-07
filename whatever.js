
const addItem = (array, item) => {
    array.push(item);
    return array;
};

const deleteItem = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
};
