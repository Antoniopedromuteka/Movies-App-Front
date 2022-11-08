import * as C from './style';

const LoginModal=()=>{
    return(
        <C.Container>
            <h2>Sign In</h2>
            <C.Form>
                <input placeholder='Enter your email' type="email" name="email"/>
                <input placeholder='Enter your password' type="password" name="password"/>
                <C.SignInButton>Sign In</C.SignInButton>
                <C.RememberContainer>
                    <C.Remember>
                        <input type="checkbox" name="remember" id="" />
                        Remember-me
                    </C.Remember>
                    <p>Need Help?</p>
                </C.RememberContainer>
                <p>New to Netflix? <strong>Sign up now.</strong></p>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn More</a></p>
            </C.Form>
        </C.Container>
    )
}
export default LoginModal;