import React from "react";
import AppData from "./AppData";
import Cards from "./Cards";

const Hollywood=()=>{
    return(
 <Cards
        key={AppData[4].id}
        imgsrc={AppData[4].imgsrc}
        spantxt={AppData[4].spantxt}
        btnTitle={AppData[4].btnTitle}
        title={AppData[4].title}
      />
    )
}

export default Hollywood;