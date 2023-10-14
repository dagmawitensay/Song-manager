import { createSlice } from "@reduxjs/toolkit";


const allSongsInitalState = {
    allSongs: {
        isLoading: false,
        data: [],
        errors: ""
    }
}

export const getAllSongsSlice = createSlice({
    name: 'all_songs',
    initialState: allSongsInitalState,
    reducers: {
        getAllSongsAction: (state) => {
            state.allSongs.isLoading = true;
            state.allSongs.errors = ""
        },
        getAllSongsSuccessAction: (state, action) => {
            state.allSongs.isLoading = false;
            state.allSongs.data = action.payload;
        },
        getAllSongsFailureAction: (state, action) => {
            state.allSongs.isLoading = false;
            state.allSongs.errors = action.payload;
        }
    }
})


export const {
    getAllSongsAction,
    getAllSongsSuccessAction,
    getAllSongsFailureAction
} = getAllSongsSlice.actions;

export default getAllSongsSlice.reducer;