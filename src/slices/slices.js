import { createSlice } from "@reduxjs/toolkit";

const songsInitialState = {
  song: {
    isLoading: false,
    data: null,
    errors: "",
  },
};

export const getSongsSlice = createSlice({
  name: "SONGS",
  initialState: songsInitialState,
  reducers: {
    createSongAction: (state, action) => {
      state.song.data = action.payload;
      state.song.errors = "";
      state.song.isLoading = true;
    },

    createSongSuccessAction: (state, action) => {
      state.song.isLoading = false;
      state.song.data = action.payload;
    },
    createSongFailureAction: (state, action) => {
      state.song.isLoading = false;
      state.song.errors = action.payload;
    },
    updateSongAction: (state, action) => {
      state.song.data = action.payload;
      state.song.isLoading = true;
    },
    updateSongSuccessAction: (state, action) => {
      state.song.data = action.payload;
      state.song.isLoading = false;
    },
    updateSongFailureAction: (state, action) => {
      state.song.errors = action.payload;
      state.song.isLoading = false;
    },
    deleteSongAction: (state, action) => {
      state.song.data = action.payload;
      state.song.isLoading = false;
    },
    deleteSongSuccessAction: (state, action) => {
      state.song.data = action.payload;
      state.song.isLoading = false;
    },
    deleteSongFailureAction: (state, action) => {
      state.song.errors = action.payload;
      state.song.isLoading = false;
    },
    getSongAction: (state) => {
      state.song.isLoading = true;
      state.song.errors = "";
    },
    getSongSuccessAction: (state, action) => {
      state.song.isLoading = false;
      state.song.data = action.payload;
    },
    getSongErrorAction: (state, action) => {
      state.song.isLoading = false;
      state.song.errors = action.payload;
    },
  },
});

export const {
  getSongAction,
  getSongSuccessAction,
  getSongErrorAction,
  createSongAction,
  createSongSuccessAction,
  createSongFailureAction,
  updateSongAction,
  updateSongSuccessAction,
  updateSongFailureAction,
  deleteSongAction,
  deleteSongSuccessAction,
  deleteSongFailureAction,
} = getSongsSlice.actions;

export default getSongsSlice.reducer;
