import {put, all, takeEvery, call} from 'redux-saga/effects';
import {URL} from '../config/URL';
import axios from 'axios';
import {actionType} from './reducer';

function * addtodo(action:actionType) {
   yield call(axios.post,`${URL}addtodo`,action.payload);
   yield put ({
       type: 'FETCH'
   })
}

function * gettodo() {
    const {data} = yield call(axios.get, `${URL}gettodo`)
    yield put({
        type:"GET",
        payload: data.todo
    })
}

function * deleteTodo(action:actionType) {
    yield call (axios.delete, `${URL}deletetodo/${action.payload}`)
    yield put({
        type: 'FETCH'
    })
}

function * updateTodo(action:actionType) {
    yield call (axios.put, `${URL}updatetodo`, action.payload)
    yield put({
        type: 'FETCH'
    })
}

function * watcher() {
    yield takeEvery('ADD', addtodo)
    yield takeEvery('FETCH', gettodo)
    yield takeEvery('DELETE', deleteTodo)
    yield takeEvery('UPDATE', updateTodo);
}

export default function * todoSaga (){
    yield all([
        watcher(),
    ])
}