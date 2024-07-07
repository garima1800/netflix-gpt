import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import Header from './Header';
import { API_OPTIONS } from './utils/constant';
import {addNowPlayingMovies}from "./utils/moviesSlice";
import useNowPlayingMovies from "../components/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
  
  const Browse = () =>  {
	useNowPlayingMovies();
	return (
	  <div>
		<Header/>
		<MainContainer/>
		<SecondaryContainer/>
	  </div>
	);
  }
  
  export default Browse;
  