import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { getAllSongsAction, getAllSongsSuccessAction, getAllSongsFailureAction } from "../slices/getSongsslice";

function* getSongsSaga(){
    try {
        const response = yield axios.get("http://localhost:8000/songs");
        yield put(getAllSongsSuccessAction(response.data));
    } catch (error) {
        yield put(getAllSongsFailureAction(error)) 
    }
}

export function* watchGetSongsSaga(){
    yield takeLatest('GET_ALL_SONGS', getSongsSaga);  
}