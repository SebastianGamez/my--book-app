import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';


import "../css/login.css";

export const Login = () => {
  
    const [auth, setAuth] = useState(false);

    useEffect(() => {
      
        if(sessionStorage.getItem("auth")){
            setAuth(true);
        }

    }, []);
    

    const handleSubmit = e => {
        e.preventDefault()

        const data = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }

        fetch("http://localhost:4000/my-book/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
            'Content-Type': 'application/json'
            }
        })
            .then( result => result.json())
            .then( solve =>{

                if (solve.err) return alert(solve.err);
                sessionStorage.setItem("username", solve.username);
                sessionStorage.setItem("token", solve.token);
                sessionStorage.setItem("id", solve.id);
                sessionStorage.setItem("auth", JSON.stringify(true));
                alert(`Welcome, ${solve.username}. You are logged`);
                setAuth(true)

            });

    }
  
    if(auth) return <Redirect to="/my-book/account"/>

    return <div className="body-main">

        <section className="main__login">
            <div className="login__form--container">
                <form className="form__form--login">
                    <div className="form__name--container">
                        <input type="text" placeholder="Email" name="email" id="email" className="name__name--form" required/>
                    </div>
                    <div className="form__password--container">
                        <input type="password" placeholder="Password" id="password" name="password" className="password__password--form" required />  
                    </div>
                    <div className="form__button--container">
                        <button onClick={ handleSubmit } className="button__button--form">JOIN</button>
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
