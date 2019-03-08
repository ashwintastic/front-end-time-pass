import {fork, takeEvery, put, call, takeLatest, all, select } from 'redux-saga/effects';

import {CONTENT_FETCHING, CONTENT_FETCHED} from '../constants'

import *  as async from '../AsyncCalls'

function* asyncfetch(action = {}){
    try {
        const response = yield call(action.remote, {endpoint: action.endpoint, payload: action.payload});
        yield put({ type: action.type.replace('_WATHCER', ''), payload: response.data });
    }
    catch(e){
        console.log("Some error", e)
    }

}

// Content watcher
function* fetchContent() {
    yield takeLatest('CONTENT_FETCHED_WATHCER', asyncfetch)
}

function * fetchFbToken(){
    yield takeLatest('FB_TOKEN_FETCH_WATHCER', asyncfetch)
}

function* rootSaga () {
    yield all([
        fetchContent(),
        fetchFbToken()
    ]);
}

export default rootSaga