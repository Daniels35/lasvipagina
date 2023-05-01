import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { VideoContainer, Container, VideoWrapper } from './VideoPlayer.styles';
import { ContentTitle } from '../Testimonios/Testimonios.styles';

const VideoPlayer = () => {
  const opts = {
    height: '255',
    width: '350',
    playerVars: {
      controls: 0,
      rel: 0,
    },
  };
  return (
    <Container>
      <ContentTitle>Vídeos</ContentTitle>
      <VideoContainer >
        
            <VideoWrapper>
              <YouTube videoId="1QZ6cInP9Gs" opts={opts} />
            </VideoWrapper>
            <VideoWrapper>
              <YouTube videoId="n3OxhJG9M2I" opts={opts} />
            </VideoWrapper>
            <VideoWrapper>
              <YouTube videoId="tBJYo8_LwwY" opts={opts} />
            </VideoWrapper>
       
      </VideoContainer>
    </Container>
  );
};

export default VideoPlayer;