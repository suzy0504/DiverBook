import React, { useState } from "react";
import FishListData from "../../components/data/fishListData";
import Modal from "../../components/fishModal/FishModal";
import "./home.scss";

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
    <div className="fishImgCard">
      {FishListData.map((fish, index) => (
        <div key={index} onClick={() => openModal(fish)}>
          <div className="fishImgContainer">
            <img className="fishImg" src={fish.image} alt={fish.name} />
          </div>
          <div className="fishImgCardName">{fish.name}</div>
        </div>
      ))}

      {selectedFish && (
        <Modal fish={selectedFish} isOpen={isModalOpen} isClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
