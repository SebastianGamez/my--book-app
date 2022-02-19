import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { MyLoans } from './components/MyLoans';
import { NewLoan } from './components/NewLoan';
import { About } from './components/About';
import { Account } from './components/Account';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import { AuthComponent } from './components/AuthComponent';

export const MyBookRouter = () => {

    return (
        
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ Home} />
                    <Route exact path="/my-book" component={ Home } />
                    <Route exact path="/my-book/home" component={ Home } />
                    <Route exact path="/my-book/login" component={ Login } />
                    <Route exact path="/my-book/register" component={ Register } />
                    <Route exact path="/my-book/about" component={ About  } />   
                    <Route exact path="/my-book/account" component={props => <AuthComponent {...props} Component={ Account } />} />
                    <Route exact path="/my-book/account/new-loan" component={props => <AuthComponent {...props} Component={ NewLoan } />} />
                    <Route exact path="/my-book/account/my-loans" component={props => <AuthComponent {...props} Component={ MyLoans } />} />
                </Switch>
            </div>
        </Router>

    );
}