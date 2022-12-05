import React from 'react';
import styled from 'styled-components';

const HeaderComponentDiv = styled.div`
    height: 5rem;
    background-color: #fff;
    text-align: right;
`
const HeaderLoginText = styled.span`
    @font-face {
        font-family: 'PuradakGentleGothicR';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: PuradakGentleGothicR;
    position: absolute;
    top: 1.8rem;
    right: 8rem;
`
const HeaderSignUpText = styled.span`
    @font-face {
        font-family: 'PuradakGentleGothicR';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: PuradakGentleGothicR;
    position: absolute;
    top: 1.8rem;
    right: 3rem;
  
`
const LogoDiv = styled.div`
    position: absolute;
    top: 1rem;
    left: 2rem;    
`

function Header() {
    return(
        <HeaderComponentDiv>
            <LogoDiv>로고가 들어갈 부분</LogoDiv>
            <HeaderLoginText>로그인</HeaderLoginText>
            <HeaderSignUpText>회원가입</HeaderSignUpText>
        </HeaderComponentDiv>
    );
}

export default Header;