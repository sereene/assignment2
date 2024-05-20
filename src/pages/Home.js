import { Link } from "react-router-dom";
import styled from "styled-components";
import Small from "./Small";
import {useEffect, useState} from "react";
import axios from "axios";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 400px;
  height: 100vh;
  padding: 15px 15px 15px 15px;
  background-color: rgb(120, 165, 255);
  left : 0;
  top : 0;
  position: fixed;
  animation-name: ANIMATION_NAME;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  @keyframes ANIMATION_NAME{
    0%{
      width: 100vw;
    }
    100%{
      width: 400px;
    }
  }
  @media screen and (max-width: 700px){
    background-color: crimson;
  }
`;


const RightBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  justify-content: center;
  width: 100px;
  height: 100vh;
  padding: 15px 15px 15px 15px;
  background-color: lavender;
  margin-left: 400px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;
const Icon = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Title = styled.div`
  display: flex;
  align-items: end;
  font-size: 40px;
  color: white;
  text-align: center;
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
`;

const LowBar=styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 40px;
  color:white;
`;


const Home = () => {
    const [postList, setPostList] = useState([]);

    return (

        <Container>
            <MainBox>
                <Title>Serin의</Title>
                <Title>IT 블로그</Title>
                <LowBar>-------------------------</LowBar>
                <Icon>
                    <img src={"icon.jpg"} alt = "icon" width={50} />
                    <img src={"icon.jpg"} alt = "icon" width={50} />
                    <img src={"icon.jpg"} alt = "icon" width={50} />
                    <img src={"icon.jpg"} alt = "icon" width={50} />
                </Icon>
            </MainBox>
            <RightBox>
                <Link to="/postview/1">
                    <Small></Small>
                </Link>
                <Link to="/postview/2">
                    <Small></Small>
                </Link>
                <Link to="/postview/3">
                    <Small></Small>
                </Link>
            </RightBox>

        </Container>

    )

}

export default Home;
