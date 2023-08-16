import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Footer from "../base/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #fff2f6 0%, #fefbff 100%);
  height: 840px;
`;
const Date = styled.h1`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 400;
  margin-top: 15%;
  margin-left: 6%;
`;
const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 45px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: -3%;
  padding-left: 2%;
  padding-right: 2%;
`;
const Name = styled.h5`
  color: #616161;
  font-family: "Noto Sans KR";
  font-size: 26px;
  font-weight: 400;
  margin-left: 5%;
  margin-top: -9%;
`;
const progressBarAnimation = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 340px;
  height: 24px;
  flex-shrink: 0;
  border: 2px solid #f9f9f9;
  background: #fff;
  margin-top: -8%;
`;
const ProgressBar = styled.div`
  background: #aba8a8;
  width: 54px;
  height: 24px;
  flex-shrink: 0;
  background: transparent;
  transform-origin: left;
  animation: ${(props) =>
    props.isActive
      ? css`
          ${progressBarAnimation} 10s linear infinite
        `
      : "none"};
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: px;
  margin-left: 5%;
`;
const WhiteBox = styled.div`
  flex: 6;
  width: 90%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 20px;
  margin: 2% 5%;
  color: #011821;
  font-family: "Noto Sans KR";
  font-size: 36px;
  font-weight: 400;
  text-align: center;
`;

const ClickButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 130px;
  max-height: 130px;
  border-radius: 50%;
  margin-bottom: -70px;
  margin-left: 33%;
`;
//상단 부분 css 코드입니다//

export default function Click(props) {
  const [isProgressRunning, setIsProgressRunning] = useState(false);

  const handleButtonClick = () => {
    console.log("버튼 눌림");

    setIsProgressRunning((prevState) => !prevState);
  };

  return (
    <Container>
      <Date>날짜 불러오기</Date>
      <Title>{props.title}</Title>
      <Name>작성자 별명</Name>
      <ProgressBarContainer>
        <ProgressBar isActive={isProgressRunning} />
      </ProgressBarContainer>
      <TimeInfo>
        <span>00:00</span>
        <span>99:99</span>
      </TimeInfo>
      <WhiteBox>{props.inputText}</WhiteBox>
      <ClickButton onClick={handleButtonClick}>
        <Image src="/재생버튼.jpg" alt="버튼 이미지" />
      </ClickButton>
      <Footer />
    </Container>
  );
}
