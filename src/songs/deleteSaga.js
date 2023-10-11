import axios from "axios";
import { deleteSongFailureAction, deleteSongSuccessAction } from "../slices/slices";
import { put, takeLatest } from "redux-saga/effects";

function* deleteSaga({id}) {
    try{
    const response = yield axios.delete();
    yield put(deleteSongSuccessAction(response.data))
    } catch (error) {
        yield put(deleteSongFailureAction(error))
    }
}

export function* watchDeleteSongSaga( ) {
    yield takeLatest('delete_song', deleteSaga)
}