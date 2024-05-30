import React from "react";
import styled, { css } from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ModalContent = styled.div`
  padding: 15px;
  border-radius: 10px -0px 10px 10px;
  position: relative;
  background: linear-gradient(-135deg, transparent 40px, #71a9db 0);
`;

const FishImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  border-radius: 10px;
`;

const WitheBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(-135deg, transparent 35px, #ffffff 0);
`;

const Img = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.div`
  margin: 10px;
  display: flex;
  text-align: start;
  font-size: 13px;
`;

const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const MethodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const MethodGridName = styled.div`
  background-color: #71a9db;
  grid-row: 1 / span 2;
  border-style: solid;
  border-color: white;
  border-width: 0 1px 1px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MethodGridText = styled.div`
  grid-column: 2 / span 2;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$isSingleMethod &&
    css`
      grid-row: 1 / span 2;
    `}
`;

const MethodText = styled.p`
  border-style: solid;
  border-width: 0 1px 0 0;
  border-color: #71a9db;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

const BlueTextBox = styled.div`
  background-color: #71a9db;
  align-items: center;
  justify-content: center;
  display: flex;
  border-style: solid;
  border-color: white;
  border-width: 0 0 1px 0;
  padding: 3px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const LineTextTop = styled.p`
  border-style: solid;
  border-width: 1px 1px 1px 0;
  border-color: #71a9db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineTextBottom = styled.p`
  border-style: solid;
  border-width: 0 1px 0 0;
  border-color: #71a9db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlueTextBoxLast = styled.div`
  background-color: #71a9db;
  align-items: center;
  justify-content: center;
  display: flex;
  height: auto;
  width: auto;
`;

const LineTextTopLast = styled.p`
  border-style: solid;
  border-width: 1px 1px 1px 0;
  border-color: #71a9db;
  align-items: center;
  justify-content: center;
  padding: 3px;
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

  const isSingleMethod = Object.entries(fish.CaptureMethod).length === 1;

  console.log(Object.entries(fish.CaptureMethod).length);
  return (
    <Modal onClick={isClose}>
      <ModalContent>
        <WitheBox>
          <FishImg>
            <Img src={fish.image} alt={fish.name} />
          </FishImg>
          <Name>{fish.name}</Name>
          <Info>{fish.fishInfo}</Info>
          <TextBox>
            <section>
              <Div>
                <BlueTextBox>살점 무게</BlueTextBox>
                <LineTextTop>{fish.weight}</LineTextTop>
              </Div>
              <Div>
                <BlueTextBox>활동 시간</BlueTextBox>
                <LineTextBottom>{fish.activityTime}</LineTextBottom>
              </Div>
            </section>
            <MethodGrid>
              <MethodGridName>포획 방식</MethodGridName>
              {Object.entries(fish.CaptureMethod).map(
                ([star, method], index) => (
                  <MethodGridText key={index} $isSingleMethod={isSingleMethod}>
                    <BlueTextBox>{star}</BlueTextBox>
                    <MethodText>{method}</MethodText>
                  </MethodGridText>
                )
              )}
            </MethodGrid>
            <Div>
              <BlueTextBoxLast>사용 요리</BlueTextBoxLast>
              <LineTextTopLast>
                {renderCookingUsed(fish.cookingUsed)}
              </LineTextTopLast>
            </Div>
          </TextBox>
        </WitheBox>
      </ModalContent>
    </Modal>
  );
};

export default FishModal;
