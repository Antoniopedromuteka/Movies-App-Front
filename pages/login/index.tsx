import * as C from "./style";
import logo from '../../src/assets/images/logo.svg';
import Image from "next/image";
import LoginModal from "../../components/loginModal";
import { useEffect } from "react";

const Login=()=>{
    useEffect(()=>{
        document.body.style.overflow = 'hidden';
    });
    return(
        <C.Container style={{  
            backgroundImage: "url("+"https://i.ibb.co/LZqvwYR/movie-1.png"+")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div>
                <header>
                    <Image src={logo} alt='logo' width={160} />
                    <C.SignUpButton>
                        Sign Up
                    </C.SignUpButton>
                </header>
                <LoginModal/>
            </div>
        </C.Container>
    )
}
export default Login;