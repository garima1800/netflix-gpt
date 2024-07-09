import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import Header from './Header';
import { API_OPTIONS } from './utils/constant';
import {addNowPlayingMovies}from "./utils/moviesSlice";
import { addTopRatedMovies } from './utils/moviesSlice';

import useNowPlayingMovies from "../components/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';
import usePopularMovies from './hooks/usePopularMovies';
  
  const Browse = () =>  {
	useNowPlayingMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	usePopularMovies();
	return (
	  <div>
		<Header/>
		<MainContainer/>
		<SecondaryContainer/>
	  </div>
	);
  }
  
  export default Browse;
  