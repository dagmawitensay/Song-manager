import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { updateSongFailureAction, updateSongSuccessAction } from '../slices/slices';


function* updateSongSaga({id, song}) {
    try {
        const response = yield axios.put(`http://localhost:8000/songs/${id}`, song);
        console.log(response.data)
        yield put(updateSongSuccessAction(response.data));
    } catch(error) {
        yield put(updateSongFailureAction(error));
    }
}

export function* watchUpdateSongSaga() {
    console.log("got a request")
    yield takeLatest('UPDATE_SONG_BY_ID', updateSongSaga);
}