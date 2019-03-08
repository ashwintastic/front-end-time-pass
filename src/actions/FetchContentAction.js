import callApi from '../ApiCall';
import {CONTENT_FETCHING, CONTENT_FETCHED} from '../constants';
import { takeLatest, put, call } from 'redux-saga/effects';




// function fetchedallContents(){
//     debugger
//     return callApi.get('localhost:3003/')
// }
//
//
// // export function* fetchcontentsFromserver() {
// //
//     dispatch({type: CONTENT_FETCHING, payload: 'hie'})
//     // debugger
//     //     try {
//     //         const response = yield call(callApi.get('localhost:3003/'));
//     //         const responseBody = response.json();
//     //         return responseBody
//     //     } catch (e) {
//     //         yield put('-------------failed');
//     //         return;
//     //     }
//     //     //yield put(setRecords(responseBody.records));
// }
