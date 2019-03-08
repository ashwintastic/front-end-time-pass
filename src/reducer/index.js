import { combineReducers } from 'redux';
import contentReducer from './ContentReducer'
import tokenReducer from './JwtReducer'
// export default function createReducer(injectedReducers = {}) {
//     const rootReducer = combineReducers({
//         content: contentReducer
//     });
//     return rootReducer;
// }


const rootReducer = combineReducers({
    contents: contentReducer,
    jwtToken: tokenReducer
});

export default rootReducer