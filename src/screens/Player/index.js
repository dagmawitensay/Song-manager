import styled from '@emotion/styled';
import React, { useRef, useState} from 'react';
import { createGlobalStyle } from 'styled-components';



const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

const Container = styled.div`
   background-color: grey;
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`
const PlayerContainer = styled.div`
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.2);
  height: 450px;
  max-width: 400px;
  width: 350px;
  padding: 24px;
  background-color: 20pxgrey;
  border-radius: ;
  ${'' /* margin: auto; */}
  ${'' /* max-width: 350px;
  border-radius: 20px;
  padding: 24px;
  background-color: "green";
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white); */}
`;

const Img = styled.img`
    border-radius: 120px;
    display: block;
    margin: auto;
    height: 200px;
    width: 200px;
`

const TrackInfo = styled.div`
    text-align: center;
    z-index: 1;
    position: relative;
    background-color: 'green';
    color: #fff;
`

const Title = styled.h2`
    font-weight: 700;
    margin-bottom: 4px;
`

const Artist = styled.h3`
    font-weight: 300;
    margin-top: 0;
`

const tracks = [
  {
    title: "Feker Neh",
    artist: "Meskerem Getu",
    audioSrc: "https://soundcloud.com/mackswolfmusic/one-in-a-million-mwremix",
    image: "https://source.unsplash.com/user/c_v_r/1900x800",
    color: "green",
  },
];

export default function AudioPlayer() {
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const { title, artist, color, image, audiosrc} = tracks[trackIndex];
    const audioRef = useRef(new Audio(""));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const toPrevTrack = () => {
       console.log("to prev") 
    }

    const toNextTrack = () => {
        console.log("to next")
    }

 
    const { duration } = audioRef.current;
    return (
      <Container>
        <PlayerContainer>
          <TrackInfo>
            <Img src={image} alt={`track artwork for ${title} by ${artist}`} />
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
          </TrackInfo>
        </PlayerContainer>
      </Container>
    );
}