import React from 'react';
import { Link } from 'react-router-dom';

import "../css/account.css";

export const Account = () => {

  return <div className="body-main">

    <section className="main__account">
      
      <div className="account__welcome--container">
        <h3 className="welcome__title">Welcome, { sessionStorage.getItem("username") }</h3>
      </div>
      
      <div className="account__options--container">
        
        <div className="options__new-loan--contianer">
          <div className="new-loan__link--container">
            <Link className="link__link--new-loan" to="/my-book/account/new-loan">New loan</Link>
          </div>
          <div className="new-loan__image--container">
            <span className="image__image--new-loan"></span>
          </div>
        </div>

        <div className="options__my-loans--contianer">
          <div className="my-loans__link--container">
            <Link className="link__link--my-loans" to="/my-book/account/my-loans">My loans</Link>
          </div>
          <div className="my-loans__image--container">
            <span className="image__image--my-loans"></span>
          </div>
        </div>

        <div className="options__sing-out--contianer">
          <div className="sing-out__link--container">
            <Link className="link__link--sing-out" to="/" onClick={()=> sessionStorage.clear()}>Sing-out</Link>
          </div>
          <div className="sing-out__image--container">
            <span className="image__image--sing-out"></span>
          </div>
        </div>
        
      </div>

    </section>

  </div>;
};
