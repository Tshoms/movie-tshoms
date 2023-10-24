import React from "react";
import "./LoginPage.css";
import video from "../../assets/video/video-two-movie.mp4";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="main-home">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted></video>

      <div className="content">
        <h1>Tshoms-Movie</h1>
        <h2>Enjoy your movie !</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
