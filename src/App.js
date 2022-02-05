// import logo from './logo.svg';
import React, { Fragment } from "react";
import "./App.css";
// import Cards from "./cards";

function App(props) {
  return (
    <Fragment>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card_image" />
          <div className="card_info">
            <span className="card_category">{props.spantxt}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href="https://www.netflix.com/pk/" target="_blank">
              <button>{props.btnTitle}</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
