import React , {useEffect} from 'react'
import {auth, provider } from "../firebase"
import styled from 'styled-components'
import {findRenderedComponentWithType} from 'react-dom/test-utils'
import {
    selectUserName, selectUserPhoto, setUserLogin, setSignOut
} from "../features/user/userSlice"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"


export default function Login() {


    return (
        <Container>
            <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                See Black Widow before it's available to all Disney+ subscribers on October 6. Watch as many times as you like with Premier Access for $29.99 and your Disney+ subscription.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
              

            </Content>
        </Container>
    )
}

const Container = styled.div `
position : relative;
height : calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;

&:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");      
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.65;
    z-index: -1;
}
`
const Content = styled.div `

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 150%;
    background-color:#FE0000;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 16px;
    margin-bottom: 12px;
    &:hover {
        background: rgba(204, 204, 204, 0.0);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -50px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.4);
      border-color: rgba(249, 249, 249, 0.8);
    }
`

const Description = styled.p`
    font-size: 13px;
    font-weight : 600;
    padding : 20px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    width: 150%;
`

const CTALogoTwo = styled.img`
    width: 90%;
`
