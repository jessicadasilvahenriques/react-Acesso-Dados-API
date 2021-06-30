import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './navbar/Navbar'

import Login from '../pages/Login'
import Home from '../pages/Home'
/* import NotFound from './NotFound' */
import Adicionar from '../pages/Adicionar'
import Lista from '../pages/Lista'

/* import {history} from '../history' */

const Routes = () => {
    return (
    <Router /* history={history} */>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login"  component={Login}/>
            <Route path="/adicionar"  component={Adicionar}/>
            <Route path="/lista"  component={Lista}/>

        </Switch>

    </Router>
    );
}

export default Routes