import React, {useEffect} from 'react'
import {useState} from 'react'

import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from "../firebase";
import Movies from './Movies';
import { setMovies } from '../features/counter/movie/movieSlice';

export default function Details() {
    
    const {id} = useParams() ;
    const [mov, setMovie] = useState()  //define state
    const [load, setLoad] = useState(true)

    // console.log(movie.id);
    async function set() {
       //get info from database >::::::
      const data = await db.collection("movies")
       .doc(id)
       .get()
        setMovie ( data.data())
        setLoad(false)    
        console.log(data.data())
        console.log(load);
    }

       
    


if(load){
    set();
    return (
        <Loader>
            {/* <h1>
              ma chuda
           </h1>
          */}

<img src="/images/Spinner.svg"/>
        </Loader>

)}

    return (
    <Container>
            <Background>
            <img src={mov.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={mov.titleImg} />
            </ImageTitle> 
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
               {mov.subTitle}    
            </SubTitle> 
            <Description>
               {mov.description}
             </Description>
            
        </Container>
    )
}


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow:hidden;
`
const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0; 
right: 0;
z-index: -1;
opacity: 0.8;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Loader = styled.div `
display:flex;
flex:1;
align:center;
margin:auto;
padding: 0px 45%;
`

const ImageTitle = styled.div`
height: 15vh;
min-height: 100px;
width: 20vw;
min-width: 100px;
margin-top: 60px;
margin-bottom: 30px;
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb (249, 249, 249);
border: none;
letter-spacing: 1.8px;
cursor: pointer;
&:hover {
    background: rgb(198, 198, 198);
}
`

const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`

const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
span {
    font-size: 30px;
    color: white;
}
`

const GroupWatchButton = styled(AddButton)`
background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width: 760px;
`