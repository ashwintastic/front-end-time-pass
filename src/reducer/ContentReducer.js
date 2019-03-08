import {CONTENT_FETCHING, CONTENT_FETCHED} from '../constants'
import { fromJS } from 'immutable';

const initialState = {
}

function contentReducer(state = initialState, action) {
    switch (action.type) {
        case CONTENT_FETCHING:
            return null;
        case CONTENT_FETCHED:
            return action.payload;
        case 'CONTENT_FETCH_WATHCER':
            return [];
        default:
            return state;
    }
}

export default contentReducer;