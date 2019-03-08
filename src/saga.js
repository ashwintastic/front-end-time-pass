import {fork, takeEvery, put, call, takeLatest, all, select } from 'redux-saga/effects';

import {CONTENT_FETCHING, CONTENT_FETCHED} from './constants'



function* asyncfetch(action = {}){
    try {
        const response = yield call(action.remote);
        yield put({ type: CONTENT_FETCHED, payload: response.data });
    }
    catch(e){
      console.log("Some error", e)
    }

}


function* fetchContent() {

    yield takeLatest('CONTENT_FETCH_WATHCER', asyncfetch)
}



function* rootSaga () {
    yield all([
        fetchContent(),
    ]);
}

export default rootSaga