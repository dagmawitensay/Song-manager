import React from "react";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Container = styled.div`
  border-radius: 10px;
  height: 370px;
  width: 350px;
  margin: 0 auto;
  background-color: #9aaebb;
`;
const Image = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h2`
  padding: 0 10px;
`;

const Description = styled.p`
  padding: 0 10px;
`;

const IconContainer = styled.span`
  display: flex;
  align-itmes: center;
  justify-content: center;
`;

const Delete = styled(DeleteIcon)`
  color: red;
  padding: 0 20px;
`;

const Edit = styled(EditIcon)`
  color: green;
  padding: 0 20px;
`;

const Play = styled(PlayCircleIcon)`
  padding: 0 20px;
`;

export default function Card() {
  return (
    <Container>
      <Image src="https://source.unsplash.com/user/c_v_r/1900x800" />
      <Title>Lorem Ipsum</Title>
      <Description>This song is written by Justin Bibber</Description>
      {/* <DeleteIcon /color="disabled" /> */}
      <IconContainer>
        <Edit fontSize="large"/>
        <Delete fontSize="large"/>
        <Play fontSize="large"/>
      </IconContainer>
    </Container>
  );
}
