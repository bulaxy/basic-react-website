import {
    ADD_ITEM,
    CLEAR_ITEMS
} from '../actions'

const initialState = {
    list: []
}

function listReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            var newItemObj = {
                name: action.name,
                item: action.item
            }
            return {
                ...state,
                list: [...state.list, newItemObj] //using push will cause mutation, so need to do this.
            };
        case CLEAR_ITEMS:
            state.list = []
            return {
                ...state,
            };
        default:
            return state;
    }
}
export default listReducer