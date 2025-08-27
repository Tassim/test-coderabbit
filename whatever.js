
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

const updateItem = (array, oldItem, newItem) => {
    const index = array.indexOf(oldItem);
    if (index > -1) {
        array[index] = newItem;
    }
    return array;
}

const getItem = (array, item) => {
    const index = array.indexOf(item);
    return index > -1 ? array[index] : null;
};

// Exporting functions for use in other modules
export { addItem, deleteItem, updateItem, getItem };