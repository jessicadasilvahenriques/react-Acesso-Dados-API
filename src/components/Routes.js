import React from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from './navbar/Navbar'

import Home from '../pages/Home'
import About from '../pages/About' 
import Adicionar from '../pages/Adicionar'
import Lista from '../pages/Lista'
import Editar from '../pages/Editar'


const Routes = () => {
    return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    

                    <div style={{maxWidth:"70rem", margin: "1rem auto"}}>
                        <Route path="/adicionar"  component={Adicionar}/>
                        <Route path="/lista"  component={Lista}/>
                        <Route path="/editar/:id" component={Editar} />
                        <Route path="/about" component={About} />
                    </div>
                        
                </Switch>
            </Router>
    );
}

export default Routes