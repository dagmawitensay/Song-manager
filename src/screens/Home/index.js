import React, { useState } from "react";
import Input from "./search";
import styled from "@emotion/styled";
import logo from "../../Rythmix-logos/Rythmix-logos_transparent3.png";
import Card from "./card";
import AddIcon from "@mui/icons-material/Add";
import Form from "./form";
import tracks from "../tracks";

const Logo = styled.img`
  max-width: 200px;
  height:100px;
  width: 100%;
  padding: 15px 0px 10px 40px;

`;
// #04364a

const Header = styled.header`
  background-color: #045B4E;
  display: grid;
  grid-template-columns: 1fr 8fr;
  z-index: -1;
  width: 100%;
`;


const CardContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
  gap: 30px;
  z-index: -1;
`;

const Body = styled.div`
  margin: 0px;
`;

const Button = styled.button`
  position: sticky;
  background-color: #04364a;
  color: #f7e108;
  left: 1400px;
  bottom: 40px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${'' /* z-index: -1; */}
`;
const Add = styled(AddIcon)`
  position: sticky;
  background-color: #04364a;
  color: #f7e108;
  left: 1400px;
  bottom: 40px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openMoadl(){
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Body>
      <Header>
        <Logo src={logo} />
        <Input />
      </Header>

      <CardContainer>
      {
        tracks.map((track) => <Card imagesrc={track.artwork} title={track.title} artist={track.artist} id={track.id}/>)
      }
      </CardContainer>
      <Form modalIsOpen={modalIsOpen} closeModal={closeModal}/>
      <Button onClick={openMoadl}>
        <Add />
      </Button>
    </Body>
  );
}
