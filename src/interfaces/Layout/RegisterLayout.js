import React, {Component} from 'react';
import LoginContainer from "../../components/FormLogin/LoginContainer";
import RegisterForm from "../../components/FormLogin/RegisterForm";
import '../../assets/css/Login.css';

class RegisterLayout extends Component {
    render() {
        return (
            <div className='LoginStyle.css'>
                <LoginContainer>
                    <RegisterForm/>
                </LoginContainer>

            </div>
        );
    }
}

export default RegisterLayout;