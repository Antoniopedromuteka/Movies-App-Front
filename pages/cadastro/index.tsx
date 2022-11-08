import CadastroModal from "../../components/cadastroModal ";
import * as C from "./style";
import logo from '../../src/assets/images/logo.svg';
import Image from "next/image";

const Cadastro=()=>{
    return(
        <C.Container style={{  
            backgroundImage: "url("+"https://i.ibb.co/LZqvwYR/movie-1.png"+")",
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
          }}>
            <div>
                <header>
                    <Image src={logo} alt='logo' width={160} />
                    <C.SignUpButton>
                        Sign In
                    </C.SignUpButton>
                </header>
                <CadastroModal/>
            </div>
        </C.Container>
    )
}
export default Cadastro;