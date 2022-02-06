// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Netflix from "./Netflix";
import Hollywood from "./Hollywood";

// import Cards from "./cards";

const favSeries = "holly";
// const Fav = () => {
//   if (favSeries === "Netflix") {
//     return <Netflix />;
//   } else {
//     return <Hollywood />;
//   }
// };

function App() {
  return (
    <div>
      <h1 className="heading_style">List of top 5 netflex series in 2021</h1>
      {favSeries === "Netflix" ? <Netflix /> : <Hollywood />}
      {/* <Fav /> */}
      {/* {AppData.map((currentValue) => {
        return (
          <Cards
            key={currentValue.id}
            imgsrc={currentValue.imgsrc}
            spantxt={currentValue.spantxt}
            btnTitle={currentValue.btnTitle}
            title={currentValue.title}
          />
        );
      })} */}
    </div>
  );
}

// export { App, Fav };

export default App;
