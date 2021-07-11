import React from 'react'
import styled from 'styled-components'

import HoverVideoPlayer from 'react-hover-video-player';

import ReactDOM from 'react-dom';

function Viewers() {
    return (
        <Container>

            <Wrap id="app">
              <img src="/images/viewers-disney.png" />
              
            </Wrap>
            <Wrap>
            <img src="/images/viewers-pixar.png" />
            </Wrap>
            <Wrap>
            <img src="/images/viewers-marvel.png" />
            </Wrap>
            <Wrap>
            <img src="/images/viewers-national.png" />
            </Wrap>
            <Wrap>
            <img src="/images/viewers-starwars.png" />
            </Wrap>
        </Container>
    )
}

//  class Application extends React.Component {
//     stopMovie = (e) => {
//       e.target.pause();
//       console.log('off');
//     }
    
//     playMovie = (e) => {
//       e.target.play();
//       console.log('on');
//     }
    
//     showPoster = (e) => {

//     }

//     render() {
//       return (
//         <div>
//           <video 
//             onMouseOver={this.playMovie}
//             onMouseOut={this.stopMovie}
//             src='/videos/1564674844-disney.mp4'
//             poster="/images/viewers-starwars.png"
//             preload='none'
//             loop/>
//         </div>
//       );
//     }
//   }
  
 // ReactDOM.render(<Application />, document.getElementById('app'));

// function MyComponent (props) {
//     return (
//       <HoverVideoPlayer
//         videoSrc={props.videosrc}
//         pausedOverlay={
//           <img
//             src={props.imgsrc}
//             alt=""
//             style={{
//               // Make the image expand to cover the video's dimensions
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         }
//         loadingOverlay={
//           <div className="loading-spinner-overlay" />
//         }
//       />
//     );
//   }

export default Viewers

const Container = styled.div`
margin-top : 30px;
display : grid;
grid-gap: 25px;
grid-template-columns: repeat(5 , minmax(0, 1fr));

`


const Wrap = styled.div `
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -50px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.03);
    border-color: rgba(249, 249, 249, 0.8);
}
`