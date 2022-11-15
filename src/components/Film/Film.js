import { PlayCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { history } from "../../App";
import "./Film.css";

export default function Film(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { film } = props;

  return (
    <div className="mx-2 mt-3 relative text-center" id="scheduleMovie">
      <div className="overflow-hidden drop-shadow-xl rounded-lg film__card cursor-pointer">
        <div
          className="film__card-hover"
          style={{
            height: "100%",
            backgroundImage: `url(${film.hinhAnh})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            position: "relative",
          }}
        >
          <img
            src={film.hinhAnh}
            alt={film.tenPhim}
            className="opacity-0 overflow-hidden"
            style={{ height: "320px" }}
          />
        </div>
        {/* play trailer */}
        <div className="film__card-overlay relative">
          <div className="rounded-full cursor-pointer">
            <PlayCircleOutlined onClick={showModal} className="film__card-playicon" />
          </div>
          {/* HOT */}
          <div className="absolute top-5 right-0">
            {film.hot === true ? (
              <span className="bg-red-500 text-white font-semibold rounded-sm ml-3 py-1 px-4">Hot</span>
            ) : (
              <span>{""}</span>
            )}
          </div>
        </div>
        <div className="trailer">
          <Modal
            className="mt-10"
            width={1000}
            centered
            title={<span className="text-xl">{"Trailer - " + film.tenPhim}</span>}
            open={isModalOpen}
            destroyOnClose={true}
            onCancel={handleCancel}
          >
            <ReactPlayer onCancel={handleCancel} width={950} height={500} controls url={film?.trailer} />
          </Modal>
        </div>
        {/* play trailer */}
      </div>

      <h1 className="title-font md:text-md lg:text-lg font-medium text-gray-900 mt-4 h-16">
        {film.tenPhim.length > 50 ? <>{film.tenPhim.slice(0, 30)} ...</> : <>{film.tenPhim}</>}
      </h1>

      <button
        onClick={() => {
          history.push(`/detail/${film.maPhim}`);
        }}
        className="bg-orange-600 block w-full py-1 rounded-sm film__card-btn"
      >
        <a className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer">
          CHI TIẾT
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </button>
    </div>
  );
}
