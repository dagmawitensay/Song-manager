import { put, takeLatest } from 'redux-saga/effects';
import {
  createSongAction,
  createSongSuccessAction,
  createSongFailureAction,
} from "../slices/slices";
import axios from 'axios';

function* createSongSaga({song}) {
    try {
        const response = yield axios.post(`https://song-api-gsoq.onrender.com/songs/`, song);
        console.log(response)
        yield put(createSongSuccessAction(response.data));
    } catch (error) {
        yield put(createSongFailureAction(error));   
        console.log(error) 
    }
}

export function* watchCreateSongSaga() {
    yield takeLatest('CREATE_SONG', createSongSaga);
}