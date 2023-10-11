import React, { useState } from "react";
import Input from "./search";
import styled from "@emotion/styled";
import logo from "../../Rythmix-logos/Rythmix-logos_transparent3.png";
import Card from "./card";
import AddIcon from "@mui/icons-material/Add";
import Form from "./form";

const Logo = styled.img`
  width: 200px;
  height:100px;
  padding: 15px 0px 10px 40px;
`;

const Header = styled.header`
  background-color: #04364a;
  display: grid;
  grid-template-columns: 1fr 8fr;
`;

const CardContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
  gap: 30px;
`;

const Body = styled.div`
  ${'' /* background-color: #e9fcff; */}
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <Form modalIsOpen={modalIsOpen} closeModal={closeModal}/>
      <Button onClick={openMoadl}>
        <Add />
      </Button>
    </Body>
  );
}
