import { all, fork } from "redux-saga/effects";

import watchList from "./list/list.saga";

export default function* rootSaga() {
  yield all([fork(watchList)]);
}
