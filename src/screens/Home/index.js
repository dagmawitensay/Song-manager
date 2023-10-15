import React, { useEffect, useState } from "react";
import Input from "./search";
import styled from "@emotion/styled";
import logo from "../../Rythmix-logos/Rythmix-logos_transparent3.png";
import Card from "./card";
import AddIcon from "@mui/icons-material/Add";
import Form from "./form";
import Spin from "./spin";
import { useDispatch, useSelector } from "react-redux";

const Logo = styled.img`
  max-width: 200px;
  height:100px;
  width: 100%;
  padding: 15px 0px 10px 32px;

`;

const Header = styled.header`
  background-color: #045B4E;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  background-color: #fffdfc;
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
  background-color: #045b4e;
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
  const [status, setStatus]  = useState(false);
  const [currID, setCurrId] = useState(0);
  const dispatch = useDispatch();
  const allSongs = useSelector((state) => state.allSongs.allSongs);
  useEffect(() => {
    dispatch({ type: "GET_ALL_SONGS" });
  }, [])

  function openModal(status, currID){
    setStatus(status);
    setCurrId(currID);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(allSongs)


  return (
    <Body>
      <Header>
        <Logo src={logo} />
        <Input />
      </Header>

      <CardContainer>
        {allSongs.isLoading ? (
          <Spin />
        ) : (
          allSongs.data.map((track) => (
            <Card
              openModal={openModal}
              imagesrc={track.artwork}
              title={track.title}
              artist={track.artist}
              songId={track.id}
              key={track.id}
            />
          ))
        )}
      </CardContainer>
      <Form modalIsOpen={modalIsOpen} closeModal={closeModal} status={status} currId={currID} tracksLength={allSongs.data.length}/>
      <Button onClick={() => openModal(false, 0)}>
        <Add />
      </Button>
    </Body>
  );
}
