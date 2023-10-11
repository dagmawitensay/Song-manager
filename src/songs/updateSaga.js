import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { updateSongFailureAction, updateSongSuccessAction } from '../slices/slices';


function* updateSongSaga() {
    try {
        const response = yield axios.patch();
        yield put(updateSongSuccessAction(response.data));
    } catch(error) {
        yield put(updateSongFailureAction(error));
    }
}

export function* watchUpdateSongSaga() {
    yield takeLatest('update_song', updateSongSaga);
}