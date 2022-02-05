import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppData from './AppData';
// import reportWebVitals from './reportWebVitals';
// console.log(AppData)

  // function renderData(currentValue){
    
  // }

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 netflex series in 2021</h1>

    {AppData.map((currentValue)=>{
      return (
        <App
          key={currentValue.id}
          imgsrc={currentValue.imgsrc}
          spantxt={currentValue.spantxt}
          btnTitle={currentValue.btnTitle}
          title={currentValue.title}
        />
      );
    })}
{/*    
    <App
      imgsrc={AppData[1].imgsrc}
      spantxt={AppData[1].spantxt}
      btnTitle={AppData[1].btnTitle}
      title={AppData[1].title}
    />
    <App
      imgsrc={AppData[2].imgsrc}
      spantxt={AppData[2].spantxt}
      btnTitle={AppData[2].btnTitle}
      title={AppData[2].title}
    />
    <App
      imgsrc={AppData[3].imgsrc}
      spantxt={AppData[3].spantxt}
      btnTitle={AppData[3].btnTitle}
      title={AppData[3].title}
    />
    <App
      imgsrc={AppData[4].imgsrc}
      spantxt={AppData[4].spantxt}
      btnTitle={AppData[4].btnTitle}
      title={AppData[4].title}
    /> */}
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
