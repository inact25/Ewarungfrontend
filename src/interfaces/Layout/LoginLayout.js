import React, {Component} from 'react';
import LoginContainer from "../../components/FormLogin/LoginContainer";
import LoginForm from "../../components/FormLogin/LoginForm";
import '../../assets/css/Login.css';

class LoginLayout extends Component {
    render() {
        return (
            <div className='LoginStyle.css'>
                <LoginContainer>
                    <LoginForm/>
                </LoginContainer>

            </div>
        );
    }
}

export default LoginLayout;