import {fork, takeEvery, put, call, takeLatest, all, select } from 'redux-saga/effects';


function* asyncfetch(action = {}){
    try {
        const response = yield call(action.remote, {endpoint: action.endpoint, payload: action.payload});
        const jsonResponse = yield response.json();
        yield put({ type: action.type.replace('_WATHCER', ''), payload: jsonResponse });
    }
    catch(e){
        console.log("Some error", e)
    }

}

// Content watcher
function* fetchContent() {
    yield takeEvery('CONTENT_FETCHED_WATHCER', asyncfetch)
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