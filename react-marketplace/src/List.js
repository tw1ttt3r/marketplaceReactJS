import React, { Component } from 'react';

export default class List extends Component {

    componentDidMount() {
        console.log("EL componente ha sido cargado");
    }

    render(){
        return(
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        )
    }
}