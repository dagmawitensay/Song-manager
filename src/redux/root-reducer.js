import songReducer from "../slices/slices";
import allSongReducer from "../slices/getSongsslice";

const rootReducers = {
  song: songReducer,
  allSongs: allSongReducer,
};

export default rootReducers;
