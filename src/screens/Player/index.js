import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AudioControls from "./audioControls";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";


const Container = styled.div`
  background-color: #045b4e;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlayerContainer = styled.div`
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.2);
  height: 380px;
  max-width: 400px;
  width: 350px;
  padding: 24px;
  background-color: 20px grey;
  border-radius: ;
`;

const Img = styled.img`
  border-radius: 120px;
  display: block;
  margin: auto;
  height: 200px;
  width: 200px;
`;

const TrackInfo = styled.div`
  text-align: center;
  z-index: 1;
  position: relative;
  background-color: "green";
  color: #F7E108;
`;

const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 4px;
`;

const Artist = styled.h3`
  font-weight: 300;
  margin-top: 0;
`;


export default function AudioPlayer() {
  const { id: pageId } = useParams();
  const [trackIndex, setTrackIndex] = useState(pageId);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const allSongs = useSelector((state) => state.allSongs.allSongs);
  const { title, artist, artwork, url } =
    allSongs.data[trackIndex - 1 === -1 ? 0 : trackIndex - 1];
  const audioRef = useRef(new Audio(url));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_ALL_SONGS" });
  }, [dispatch]);

  const toNextTrack = useCallback(() => {
    setTrackIndex((trackIndex + 1) % allSongs.data.length);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]); // eslint-disable-line react-hooks/exhaustive-deps
  }, [toNextTrack]);

  const toPrevTrack = () => {
    setTrackIndex(
      (trackIndex - 1 + allSongs.data.length) % allSongs.data.length
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(url);

    setTrackProgress(audioRef.current.currentTime);
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex, startTimer, url]);

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = (value) => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #F7E108  ), color-stop(${currentPercentage}, #777))
`;

  const RangeInput = styled.input`
	height: 5px;
	-webkit-appearance: none;
	width: 100%;
	margin-bottom: 10px
	border-radius: 8px;
	background: #3b7677;
	transition: background 0.2s ease;
	cursor: pointer;
    `;

  return (
    <Container>
      <PlayerContainer>
        <TrackInfo>
          <Img src={artwork} alt={`track artwork for ${title} by ${artist}`} />
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
        </TrackInfo>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <RangeInput
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </PlayerContainer>
    </Container>
  );
}
