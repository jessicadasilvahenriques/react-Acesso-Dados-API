import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './navbar/Navbar'

import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound' 
import Adicionar from '../pages/Adicionar'
import Lista from '../pages/Lista'


const Routes = () => {
    return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/notfound" component={NotFound} />

                    <div style={{maxWidth:"70rem", margin: "1rem auto"}}>
                        <Route path="/login"  component={Login}/>
                        <Route path="/adicionar"  component={Adicionar}/>
                        <Route path="/lista"  component={Lista}/>
                    </div>
                </Switch>
            </Router>
    );
}

export default Routes