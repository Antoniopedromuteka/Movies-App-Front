import * as S from "./style";
import logo from '../../src/assets/images/logo.svg';
import Image from "next/image";
import { useEffect } from "react";
import CadastroModal from "../../components/cadastroModal ";

const Cadastro=()=>{
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
    });
    return(
        <S.MainContainer style={{  
            backgroundImage: "url("+"https://i.ibb.co/LZqvwYR/movie-1.png"+")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <S.Container>
                <S.Header>
                    <Image src={logo} alt='logo' width={160} />
                    <S.SignUpButton>
                        Sign Up
                    </S.SignUpButton>
                </S.Header>
                <CadastroModal/>
            </S.Container>
        </S.MainContainer>
    )
}
export default Cadastro;