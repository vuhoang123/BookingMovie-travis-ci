import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Loading.css";

export default function Loading(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <div className="loading">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
