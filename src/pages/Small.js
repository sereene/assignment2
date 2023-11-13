import styled from "styled-components";


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
  font-size:15px;
  color: dimgray;
`

const Small = () => {
    return (
        <SmallBox>
            <img src={"image.png"} alt = "image" width={180}/>
                <BoxTitle>블로그 내용 내용 내용</BoxTitle>
            <Date>2023.11.04</Date>
        </SmallBox>
    );
}

export default Small;