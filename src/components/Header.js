import React , {useEffect} from 'react'
import {useState} from 'react'
import {auth, provider } from "../firebase"
import styled from 'styled-components'
import {findRenderedComponentWithType} from 'react-dom/test-utils'
import {
    selectUserName, selectUserPhoto, setUserLogin, setSignOut
} from "../features/user/userSlice"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
 
import HoverVideoPlayer from 'react-hover-video-player';


function Header() {

   const dispatch = useDispatch();
   const history = useHistory();
   const userName = useSelector(selectUserName);
   const userPhoto = useSelector(selectUserPhoto);
   
   

   useEffect(() => {
       auth.onAuthStateChanged(async(user)=>{
             if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))               
                history.push("/")
             }

         })
      
   }, [])

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user

                dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
           // console.log(userDetails);
            // console.log(user.photoURL);
            // console.log(user.name);
           // console.log(imageurl)
         history.push('/');
        })

    }
     
    console.log(userPhoto);
    const signOut = () =>{
        auth.signOut()
        .then(()=>{
            
            dispatch(setSignOut())
            history.push("/login")
        })
       
    }

    

    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
              {
                  !userName?  (
              <LoginContainer>        
                  <Login onClick={signIn}>Login</Login>
              </LoginContainer>   
                  ) : 
        <>

            <NavMenu>       
               <a > 
                   <img src="/images/home-icon.svg"/>
                   <span>
                       HOME
                   </span>
               </a>
               <a> 
                   
                   <img src="/images/search-icon.svg"/>
                   <span>
                       SEARCH
                   </span>
               </a>
                <a> 
                   <img src="/images/watchlist-icon.svg"/>
                   <span>
                       WATCHLIST
                   </span>
               </a>
                <a> 
                   <img src="/images/original-icon.svg"/>
                   <span>
                       ORIGINALS
                   </span>
               </a>
               <a> 
                   <img src="/images/movie-icon.svg"/>
                   <span>
                       MOVIES
                   </span>
               </a>
               <a> 
                   <img src="/images/series-icon.svg"/>
                   <span>
                       SERIES
                   </span>
               </a>
               
            </NavMenu>

            {/* <Figcap>
                Caption goes here
            </Figcap> */}
            {/* <UserImg 
            onClick={signOut}
            // src='imageurl' 
            >
                <span>
                    SignOUt
                </span>
             
            </UserImg> */}

             <UserSignOut>
                <a > 
                   
                   <img  src={userPhoto}/>
                   <span onClick={signOut}>
                      LOG OUT
                   </span>
               </a>       
               </UserSignOut>       
        </>
    }
        </Nav>
 
                  
 
 )
}



export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13  ;
  display:flex;
  padding: 0 20px;
  overflow-x : hidden;
  `
  const Logo = styled.img`
  width:80px;
 
 `
 const Login = styled.div`
    height : 70%;
    border: 1px solid white;
    padding : 10px 10px;
    margin-top: 12px;
    text-align: center;
    border-radius : 4px;
    letter-spacing: 1.5px;
    text-transform : uppercase;
    background-color : rgba(0,0,0 ,0.6 );
    cursor : pointer;
    display: inline-block;
    font-weight: bold;

    &:hover {
        background-color : #f9f9f9;
        color: #000;
        border-color : transparent;
    }
 `

 const LoginContainer = styled.div `
   flex:1;
   display: flex;
   justify-content : flex-end;
 `
 const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
            border-radius : 1px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
 const UserImg =  styled.img`
  width: 30px;
  height: 48px;
  border-radius: 50%;
  align-items: center;
  padding: 10px 1.5px;
  cursor: pointer;
 `
 const UserSignOut = styled.div `
 display: flex;
 flex: 1;
 justify-content : flex-end;
 margin-left: 25px;
 align-items: center;
 a {
     display: flex; 
     align-items: center;
     padding: 0 12px;
     cursor: pointer;
     img {
        height : 60px;
         border-radius : 50%;
         padding: 15px;
     }

//   span{
//       width : 200px;
//       text-align:left ;
//       padding-right : 420px;
//       margin: 5px auto;
//   }
  
span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    
    &:after {
        content: "";
        height: 2px;
        //background: white;
        position: absolute;
        left: 0; 
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
    }
}
&:hover {
    span:after {
        transform: scaleX(1);
        opacity: 1;
    }
}
 `