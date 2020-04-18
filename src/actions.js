
export const ADD_ITEM = "ADD_ITEM"
export function addItem(name,item) {
    return {
        type: ADD_ITEM,
        name: name,
        item:item
    }
}

export const CLEAR_ITEMS = "CLEAR_ITEMS"
export function clearItems() {
    return {
        type: CLEAR_ITEMS,
    }
}
