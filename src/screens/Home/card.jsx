import React from "react";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router";

const Container = styled.div`
  border-radius: 10px;
  height: 370px;
  width: 350px;
  margin: 0 auto;
  ${"" /* background-color: #9aaebb; */}
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.2);
`;
const Image = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h2`
`;

const Description = styled.p`
`;

const IconContainer = styled.span`
  display: flex;
  align-itmes: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Delete = styled(DeleteIcon)`
  color: red;
  padding: 0 20px;
  cursor: pointer;
`;

const Edit = styled(EditIcon)`
  color: green;
  padding: 0 20px;
  cursor: pointer;
`;

const Play = styled(PlayCircleIcon)`
  padding: 0 20px;
  cursor: pointer;
`;

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <Image
        src={props.imagesrc}
        alt={`track artwork for ${props.title} by ${props.artist}`}
      />
      <ContentContainer>
        <Title>{props.title}</Title>
        <Description>{props.artist}</Description>
      </ContentContainer>
      <IconContainer>
        <Edit fontSize="large" />
        <Delete fontSize="large" />
        <Play fontSize="large" onClick={() => {navigate(`/play/${props.id}`)}}/>
      </IconContainer>
    </Container>
  );
}
