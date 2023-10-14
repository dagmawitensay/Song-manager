import { all, fork } from "redux-saga/effects";
import { watchGetSong } from "./sagas";
import { watchCreateSongSaga } from "./createSaga";
import { watchUpdateSongSaga } from "./updateSaga";
import { watchDeleteSongSaga } from "./deleteSaga";
import { watchGetSongsSaga } from "./getSongsSaga";


const rootSaga = function* () {
    yield all([
        fork(watchGetSong),
        fork(watchCreateSongSaga),
        fork(watchUpdateSongSaga),
        fork(watchDeleteSongSaga),
        fork(watchGetSongsSaga)
    ])
}

export default rootSaga;