import React, { Component } from 'react';
import Card from './card';

export default class CardWrapper extends Component {
    render() {
        return(
            <div id="content-wrapper" className="container pt-3">
                <div className="row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        )
    }
}