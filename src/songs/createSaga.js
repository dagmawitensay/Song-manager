import { put, takeLatest } from 'redux-saga/effects';
import {
  createSongAction,
  createSongSuccessAction,
  createSongFailureAction,
} from "../slices/slices";
import axios from 'axios';

function* createSongSaga({song}) {
    try {
        const response = yield axios.post(`http://localhost:8000/songs/`, song);
        yield put(createSongSuccessAction(response.data));
    } catch (error) {
        yield put(createSongFailureAction(error));    
    }
}

export function* watchCreateSongSaga() {
    yield takeLatest('CREATE_SONG', createSongSaga);
}