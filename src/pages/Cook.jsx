import React from "react";
import cookingListData from "../components/data/cookingData";
import styled from "styled-components";

const CookingImgCard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(50px, 1fr));
  justify-items: center;
  text-align: center;
`;

const Cook = () => {
  return (
    <div>
      {cookingListData.map((categoryData, categoryIndex) => (
        <CookingImgCard key={categoryIndex}>
          {categoryData.items.map((cook, index) => (
            <div className="cookImgContainer" key={index}>
              <img className="cookImg" src={cook.image} alt={cook.name} />
              <div className="cookCardName">{cook.name}</div>
            </div>
          ))}
        </CookingImgCard>
      ))}
    </div>
  );
};

export default Cook;
