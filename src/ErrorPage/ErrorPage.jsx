import React from "react";
import errorPng from "../media/banner/error.jpg";
import "./ErrorPage.css";

export default function ErrorPage({ onReset }) {
  return (
    <div className="error_container">
      <img src={errorPng} alt="error" className="img-fluid error_img" />
      <p className="error_message">
        An error has occurred, Please refresh or try again later
      </p>
      <button
        className="btn btn-danger error_btn border rounded-5 px-5"
        onClick={onReset}
      >
        Refresh
      </button>
    </div>
  );
}
