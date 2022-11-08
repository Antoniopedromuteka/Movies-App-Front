import styled from "styled-components";

export const Container=styled.div`
    font-size:83.3%;
    color:#fff;
    background-color:#111111;
    width:25rem;
    height:30rem;
    padding:3rem;
    position:relative;
    top:40%;
    left:50%;
    transform:translate(-50%, -50%);
    h2{
        font-size:2rem;
        font-weight:bold;
        margin-bottom:1rem;
    }
    @media (max-width:500px){
        width:100%;
        border-radius:3rem 3rem 0 0;
    }
`;

export const Form=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    input{
        margin-bottom:1rem;
        width:20rem;
        height:3rem;
        background-color:#4E4E4E;
        outline:none;
        padding:1rem;-
    }
    >p{
        width:100%;
        text-align:left;
        margin-top:.6rem;
        a{
            color:#2D66F9;
        }
    }
    @media (max-width:500px){
        input,button{
            width:100%;
            height:3rem;
        }
    }
    
`;

export const SignInButton=styled.button`
    background-color:#FFD233;
    width:20rem;
    height:3rem;
`;

export const RememberContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:1rem;
    font-size:.7rem;
    color:#999;
`;

export const Remember=styled.div`
    input{
        width:1rem;
        height:1rem;
        outline:none;
    }
`;