import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { getListFilmAction } from "../../store/actions/FilmManagerActions";
import { getListCinemaSystem } from "../../store/actions/MovieTheaterManagerActions";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeIntroduce from "./HomeIntroduce/HomeIntroduce";
import HomeTheaterSystem from "./HomeTheaterSystem/HomeTheaterSystem";
import HomeNews from "./HomeNews/HomeNews";

export default function Home(props) {
  const { lstFilm } = useSelector((state) => state.FilmManagerReducer);
  //   console.log("FILM:", lstFilm);
  const { movieTheaterSystem } = useSelector((state) => state.MovieTheaterManagerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFilmAction());
    dispatch(getListCinemaSystem());
  }, []);

  return (
    <div>
      <HomeCarousel />
      <MultipleRowSlick lstFilm={lstFilm} />
      <HomeTheaterSystem movieTheaterSystem={movieTheaterSystem} />
      <HomeNews />
      <HomeIntroduce />
    </div>
  );
}
