import {FETCH_POSTS} from "../actions/types";
import {NEW_POSTS} from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function (state=initialState, action) {
    switch (action.type){
        case FETCH_POSTS:
            const data = {
                ...state,
                items: action.payload
            }
            data.item.title && (data.items.filter((item) => item.id === data.item.id).length === 0) && data.items.unshift(data.item);
            return data
        case NEW_POSTS:
            const data_ =  {
                ...state,
                item:  action.payload
            }
            data_.item.title && (data_.items.filter((item) => item.id === data_.item.id).length === 0) && data_.items.unshift(data_.item);
            return data_
        default:
            return state;

    }
}