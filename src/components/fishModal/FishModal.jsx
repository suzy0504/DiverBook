import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;

const FishModal = ({ fish, isOpen, isClose }) => {
  if (!isOpen) return null;

  const renderCookingUsed = (cookingUsed) => {
    if (typeof cookingUsed === "object") {
      return Object.entries(cookingUsed).map(([part, cooking], index) => (
        <div key={index}>
          <span>{part}</span>
          {/* cookingUsed가 문자열이면서 줄바꿈이 포함되면 적용아니면 그냥 문자열 출력 */}
          {typeof cooking === "string" && cooking.includes("\n") ? (
            cooking.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))
          ) : (
            <span>{cooking}</span>
          )}
        </div>
      ));
    } else {
      return cookingUsed
        .split("\n")
        .map((cooking, index) => <div key={index}>{cooking}</div>);
    }
  };

  return (
    <Modal onClick={isClose}>
      <ModalContent>
        <div>
          <img src={fish.image} alt={fish.name} />
          <div>{fish.name}</div>
          <div>{fish.fishInfo}</div>
        </div>
        <div>살점 무게{fish.weight}</div>
        <div>활동 시간{fish.activityTime}</div>
        <div>
          <p>포획 방식</p>
          {Object.entries(fish.CaptureMethod).map(([star, method], index) => (
            <div key={index}>
              <strong>{star}</strong>
              <span>{method}</span>
            </div>
          ))}
        </div>
        <div>
          <div>
            <p>사용 요리</p>
            <div>{renderCookingUsed(fish.cookingUsed)}</div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default FishModal;
