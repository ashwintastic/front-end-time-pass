// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from './reducer/index'
import rootSaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger )
)

// then run the saga
sagaMiddleware.run(rootSaga);
//const action = type => store.dispatch({type})