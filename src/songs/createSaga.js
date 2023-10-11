import { put, takeLatest } from 'redux-saga/effects';
import {
  createSongAction,
  createSongSuccessAction,
  createSongFailureAction,
} from "../slices/slices";
import axios from 'axios';

function* createSongSaga() {
    try {
        const response = yield axios.post();
        yield put(createSongSuccessAction(response.data));
    } catch (error) {
        yield put(createSongFailureAction(error));    
    }
}

export function* watchCreateSongSaga() {
    yield takeLatest('create_song', createSongSaga);
}