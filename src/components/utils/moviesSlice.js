import { createSlice } from "@reduxjs/toolkit";

  
  const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTopRatedMovies:(state,action) =>{
          state.topRatedMovies = action.payload
      },
      addUpcomingMovies:(state,action) =>{
        state.upComingMovies = action.payload
    },
    addPopularMovies:(state,action) =>{
      state.popularMovies = action.payload
  },
        addTrailerVideo:(state,action)=> {
          state.trailerVideo = action.payload;
        }
    }
	
	
  });
  export const {addNowPlayingMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovies,addPopularMovies} = moviesSlice.actions;
  export default moviesSlice.reducer;
  