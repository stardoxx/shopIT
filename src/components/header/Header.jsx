import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/header-logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header-styles.scss';


const Header = ({currentUser}) => {
   return (
   <BrowserRouter>
     <div className="header">
    <Link className="logo-container" to = '/'>
        <Logo className = 'logo' />
    </Link>
    <div className="options">
       
       <Link className="option" to = '/shop'>
            SHOP
        </Link>
        <Link className="option" to = '/shop'>
            CONTACT
        </Link>
       {currentUser ?
       (<div className="option" onClick = {() => auth.signOut()} >SIGN OUT</div>)
        : ( 
            <Link className="option" to ='/signin' >Sign In</Link>
        )
    }
    </div>
</div>
   </BrowserRouter>
   )
};

export default Header;