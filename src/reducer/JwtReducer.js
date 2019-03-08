import {CONTENT_FETCHING, CONTENT_FETCHED} from '../constants'
import { fromJS } from 'immutable';



function tokenReducer(state = {}, action) {
    switch (action.type) {
        case 'FB_TOKEN_FETCH':
            console.log('in case', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default tokenReducer;