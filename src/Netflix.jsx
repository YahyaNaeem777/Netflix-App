import React from "react";
import AppData from "./AppData";
import Cards from "./Cards";

const Netflix=()=>{
    return(
        <Cards
        key={AppData[0].id}
        imgsrc={AppData[0].imgsrc}
        spantxt={AppData[0].spantxt}
        btnTitle={AppData[0].btnTitle}
        title={AppData[0].title}
      />
    )
}

export default Netflix;