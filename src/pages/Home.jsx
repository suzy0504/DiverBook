import React, { useState } from "react";
import FishListData from "../components/data/fishListData";
import Modal from "../components/fishModal/FishModal";
import styled from "styled-components";

const FishImgCard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(50px, 1fr));
  justify-items: center;
  text-align: center;

  @media ${(props) => props.theme.mobile} {
    margin: 10px 0px 10px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
`;

const FishImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.404);
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
const FishImg = styled.div`
  display: flex;

  @media ${(props) => props.theme.mobile} {
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
  }
`;

const FishImgFile = styled.img`
  display: flex;
  @media ${(props) => props.theme.mobile} {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FishImgCardName = styled.div`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bolder;
  color: black;

  @media ${(props) => props.theme.mobile} {
    font-size: 11px;
    margin-bottom: 10px;
  }
`;

const Home = () => {
  const [selectedFish, setSelectedFish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (fish) => {
    setSelectedFish(fish);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedFish(null);
    setIsModalOpen(false);
  };

  return (
    <FishImgCard>
      {FishListData.map((fish, index) => (
        <div key={index} onClick={() => openModal(fish)}>
          <FishImgContainer>
            <FishImg>
              <FishImgFile src={fish.image} alt={fish.name} />
            </FishImg>
          </FishImgContainer>
          <FishImgCardName>{fish.name}</FishImgCardName>
        </div>
      ))}

      {selectedFish && (
        <Modal fish={selectedFish} isOpen={isModalOpen} isClose={closeModal} />
      )}
    </FishImgCard>
  );
};

export default Home;
