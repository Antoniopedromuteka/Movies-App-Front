import styled from "styled-components";
import image from '../../src/assets/images/movie-1.png';

export const Container=styled.div`
    width:100vw;
    height:100vh;
    >div{
        position:absolute;
        top:0;left:0;
        bottom:0;right:0;
        background-color:#111111E0;
        header{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:2rem 5rem;
        }
    }
    @media (max-width:500px){
        >div{
            header{
                padding:1.8rem 3rem;
            }
        }
        font-size:80.3%;
    }
`;

export const SignUpButton = styled.button`
    background-color:#111111;
    color:#ffffff;
    border:1px solid #FFD233;
    border-radius:5rem;
    padding:.3rem 2rem;
`;
