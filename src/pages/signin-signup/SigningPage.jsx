import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import './signingstyles.scss'
import SignUp from '../../components/sign-up/SignUp';
const SigningPage = () => {
   return (
    <div className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp/>
</div>
   )
}

export default SigningPage;