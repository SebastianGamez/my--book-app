import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { handleOnSubmitLogin } from '../helpers/handleOnSubmit';

import "../css/login.css";

export const Login = () => {
    
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    
    useEffect(() => {sessionStorage.getItem("auth") && setIsAuth(true)}, []);
  
    if( isAuth ) return <Redirect to="/my-book/account"/>

    return <div className="body-main">

        <section className="main__login">
            <div className="login__form--container">
                <form className="form__form--login">
                    <div className="form__name--container">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                            className="name__name--form"
                            value={ emailInput }
                            onChange={ e => setEmailInput(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form__password--container">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password" name="password"
                            className="password__password--form"
                            value={ passwordInput }
                            onChange={ e => setPasswordInput(e.target.value)}
                            required
                        />  
                    </div>
                    <div className="form__button--container">
                        <button 
                            onClick={ (e) => handleOnSubmitLogin(e, setIsAuth, emailInput, passwordInput) } 
                            className="button__button--form"
                        >JOIN
                        </button>
                    </div>
                </form>
                <div className="form__links--container">
                    <div className="links__register--container">
                        <Link to="/my-book/register" className="register__link">Don't have account</Link>
                    </div>
                    <div className="links__recovery--container">
                        <Link to="#" className="recovery__link">Forgot my password</Link>
                    </div>
                </div>
            </div>

        </section>

  </div>
};
