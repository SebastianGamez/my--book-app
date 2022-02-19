import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { handleOnSubmitRegister } from '../helpers/handleOnSubmit';

import "../css/register.css";

export const Register = () => {

    const [registred, setRegistred] = useState(false);

    if(registred) return <Redirect to="/my-book/login" />

    return <div className="body-main">
    <section className="main__login">
        
            <div className="login__form--container">
                <form className="form__form--login">
                    <div className="form__name--container">
                        <input type="text" placeholder="Name" name="username" id="name" className="name__name--form"/>  
                    </div>
                    <div className="form__email--container">
                        <input type="email" placeholder="Email" name="email" id="email" className="email__email--form"/>  
                    </div>
                    <div className="form__password--container">
                        <input type="password" placeholder="Password" name="password" id="password" className="password__password--form"/>  
                    </div>
                    <div className="form__confirm-password--container">
                        <input type="password" placeholder="Confirm password" name="confirm_password" id="confirm_password" className="confirm-password__confirm-password--form" />  
                    </div>
                    <div className="form__button--container">
                        <button className="button__button--form" onClick={ (e) => handleOnSubmitRegister(e, setRegistred) }>REGISTER</button>
                    </div>
                </form>
            </div>

    </section>;
  </div>
};
