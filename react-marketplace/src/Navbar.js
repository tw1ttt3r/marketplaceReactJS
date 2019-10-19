import React, { Component } from 'react';
import CardWrapper from './Cardwrapper';
import Formulario from './Form';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navbar extends Component {
    render(){
        return(
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="nav-link" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Catálogos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/form">Formulario</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route path='/' exact component={CardWrapper} />
                <Route path='/form' component={Formulario} />
            </Router>
        )
    }
}