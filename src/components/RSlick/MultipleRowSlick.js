import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import Film from "../Film/Film";

import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { filmIsPlaying, filmUpComing } = useSelector((state) => state.FilmManagerReducer);

  //   let activeFilmPlaying = filmIsPlaying === true ? "active_Film" : "none_active_Film";
  //   let activeFilmUpComing = filmUpComing === true ? "active_Film" : "none_active_Film";

  const renderFilms = () => {
    return props.lstFilm.map((film, index) => {
      return (
        <div key={index} className={`${styleSlick["width-item"]}`}>
          <Film film={film} />
        </div>
      );
    });
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    //   },
    // ],
  };
  return (
    <div className="mt-24 text-center container wow animate__animated animate__zoomIn" id="">
      {/* <div className="mb-1">
        <button
          type="button"
          className={`${styleSlick[activeFilmPlaying]} px-6 py-3 font-semibold border-gray-300 border rounded bg-gray-800 text-white mr-4 mb-3`}
          onClick={() => {
            const action = {
              type: SET_FILM_PLAYING,
            };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          type="button"
          className={`${styleSlick[activeFilmUpComing]} px-6 py-3 font-semibold border-gray-300 border rounded bg-gray-100 text-gray-800`}
          onClick={() => {
            const action = {
              type: SET_FILM_UPCOMING,
            };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div> */}
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
