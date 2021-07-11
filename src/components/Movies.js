import React from 'react'
import styled from 'styled-components'
import { selectMovies} from '../features/counter/movie/movieSlice'
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"


function Movies() {
    const movies = useSelector(selectMovies) ;

    console.log("Movies are : = ," , movies )
    //gather from store

    



    return (
        <Container>
        <Header>   Recommended For You </Header>
          <Content>
           {
            movies && movies.map((movie)=> (
               <Wrap key={movie.id}>
                 <Link to={`/detail/${movie.id}`}>
                     <img src={movie.cardImg} />
                 </Link>
               </Wrap>

               ))
           }
       
{/*             
           
            <Wrap>
              <img src="/images/simpsons-movie.png"></img>
            </Wrap>
            <Wrap>
              <img src="/images/simpsons-movie.png"></img>
            </Wrap>
            <Wrap>
              <img src="/images/simpsons-movie.png"></img>
            </Wrap>
            <Wrap>
              <img src="/images/simpsons-movie.png"></img>
            </Wrap>
            <Wrap>
              <img src="/images/simpsons-movie.png"></img>
            </Wrap>
            <Wrap>
              <img src="/images/simpsons-movie.png"></img>
            </Wrap> */}
            </Content>
        </Container>
    )
}

export default Movies

const Header = styled.div `
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size : 20px;
  letter-spacing: 1.42px;
  position: relative;
  top: 10px;
  left: 10px;
  padding : 10px;
  text-transform : uppercase;
  `

const Container = styled.div `

`


const Content = styled.div `
display: grid;

padding : 20px;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
overflow-x : hidden;
overflow-y : hidden;
position : relative;
`

const Wrap = styled.div `
border-radius: 10px;
cursor: pointer;
overflow: hidden;
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
    transform: scale(1.05);
    z-index:1;
    box-sizing: border-box;
    opacity :1;
    //position: absolute;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
}

`