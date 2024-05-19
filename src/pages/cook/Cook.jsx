import React from "react";
import cookingListData from "../../components/data/cookingData";
import "./cook.scss";

const Cook = () => {
  return (
    <div>
      {cookingListData.map((categoryData, categoryIndex) => (
        <div className="cookImgCard" key={categoryIndex}>
          {categoryData.items.map((cook, index) => (
            <div className="cookImgContainer" key={index}>
              <img className="cookImg" src={cook.image} alt={cook.name} />
              <div className="cookCardName">{cook.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cook;
//dd
