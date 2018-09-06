import { put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';
import * as types from '../actions/actionTypes';

export function loadTodosSuccess(todos) {
    return { type: types.LOAD_TODOS_SUCCESS, todos};
}

export function* fetchTodos(){
    console.log("hello world");
    const response = yield fetch("https://practiceapi.devmountain.com/api/tasks");
    const todos = yield response.json();
    yield put(loadTodosSuccess(todos));
    console.info("todos,",todos);
}