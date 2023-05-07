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
               <iframe width="350" height="255" src="https://www.youtube.com/embed/1QZ6cInP9Gs?rel=0&showinfo=0&controls=0" title="Pinzas Lasvi"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </VideoWrapper>
            <VideoWrapper>
              <iframe width="350" height="255" src="https://www.youtube.com/embed/n3OxhJG9M2I?rel=0&showinfo=0&controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </VideoWrapper>
            <VideoWrapper>
            <iframe width="350" height="255" src="https://www.youtube.com/embed/tBJYo8_LwwY?rel=0&showinfo=0&controls=0" title="Pinzas Lasvi Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </VideoWrapper>
       
      </VideoContainer>
    </Container>
  );
};

export default VideoPlayer;