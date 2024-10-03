let data = [];

export function get_items() {
    return data;
}

export function add_item(new_item) {
    // Check if the item with the same ID already exists
    const exists = data.some(item => item.id === new_item.id);
    if (!exists) {
        data.push(new_item);
        return true; // Item added successfully
    }
    return false; // Item with the same ID already exists
}

export function update_item_title_by_id(id, new_title) {
    // Find the item by id
    const item = data.find(item => item.id === id);
    if (item) {
        item.title = new_title;
        return true; // Successfully updated
    }
    return false; // Item with the given ID does not exist
}

export function delete_item_by_id(id) {
    // Find the index of the item with the given id
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1); // Remove the item from the array
        return true; // Successfully deleted
    }
    return false; // Item with the given ID does not exist
}

export function get_item_title_by_id(id) {
    // Find the item by id
    const item = data.find(item => item.id === id);
    if (item) {
        return item.title; // Return the item's title
    }
    return null; // Item with the given ID does not exist
}
