import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px grey;
  width: 200px;
  height: 250px;
  background-color: white;
  margin: 20px 20px 20px 20px;
`;

const BoxTitle = styled.div`
    font-size: 20px;
    color: #282c34;
`;

const Date = styled.div`
  margin-right: 120px;
  font-size:13px;
  color: dimgray;
`

const Small = () => {
    return (
        <SmallBox>
            <img src={"image.png"} alt = "image" width={180}/>
            <BoxTitle>"블로그 내용"</BoxTitle>
            <Date>"2023.11.15"</Date>
        </SmallBox>
    );
}


export default Small;