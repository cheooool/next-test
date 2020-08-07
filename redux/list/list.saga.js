import { call, put, takeLatest } from "redux-saga/effects";

import axios from "axios";

import { REQUEST_LIST } from "./list.types";
import { listPush } from "./list.actions";

const getTodo = () => axios.get(`https://jsonplaceholder.typicode.com/todos/1`);

function* requestList() {
  try {
    const response = yield call(getTodo);
    yield put(listPush(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export default function* watchRequestList() {
  yield takeLatest(REQUEST_LIST, requestList);
}
