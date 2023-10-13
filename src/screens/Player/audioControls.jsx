import React from 'react';
import { ReactComponent as Play } from '../assets/play.svg';
import { ReactComponent as Pause} from '../assets/pause.svg';
import { ReactComponent as Next } from '../assets/next.svg';
import { ReactComponent as Prev } from '../assets/prev.svg';

import styled from '@emotion/styled';



const ControlContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto 15px;
`

const PrevSvg = styled(Prev)`
  svg {
    width: 35px;
    height: 35px;
  }
  path {
    color: #f7e108;
    fill: var(--'#F7E108');
  }
`;

const NextSvg = styled(Next)`
  svg {
    width: 35px;
    height: 35px;
  }
  path {
    ${'' /* fill: none; */}
  }
`;

const PlaySvg = styled(Play)`
  svg {
    height: 40px;
    width: 40px;
  }
  path {
    ${'' /* fill: none; */}
  }
`;
const PauseSvg = styled(Pause)`
  svg {
    height: 40px;
    width: 40px;
  }
  path {
    ${'' /* fill: none; */}
  }
`;

export default function AudioControls({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
}) {
    return(
        <ControlContainer>
            <button onClick={onPrevClick}>
                <PrevSvg />
            </button>
            {isPlaying ? (
                <button
                type="button"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause">
                    <PauseSvg />
                </button>
            ): (<button
            type="button"
            onClick={() => onPlayPauseClick(true)}
            arial-label="Play"><PlaySvg /></button>)}
            <button
            type="button"
            aria-label="Next"
            onClick={onNextClick}
            ><NextSvg /></button>
        </ControlContainer>
    ) 
}