import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { getSongErrorAction, getSongSuccessAction } from "../slices/slices";

function* getSongSaga({ id }) {
  console.log(id)
  try {
    console.log("I am here")
    const response = yield axios.get(`https://song-api-gsoq.onrender.com/songs/${id}`);
    yield put(getSongSuccessAction(response.data));
  } catch (error) {
    yield put(getSongErrorAction(error));
  }
}

export function* watchGetSong() {
  yield takeLatest("GET_SONG_BY_ID", getSongSaga);
}
