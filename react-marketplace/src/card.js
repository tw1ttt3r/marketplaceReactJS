import React, { Component } from 'react';

export default class Card extends Component{
    render(){
        return(
            <div className="col-12 col-sm-4 d-flex justify-content-between">
                  <div className="card">
                      <img src={this.props.imgUrl} className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">{this.props.name}</h5>
                          <p className="card-text">{this.props.description}</p>
                          <p className="text-danger text-right">{this.props.price}</p>
                          <button className="btn btn-primary">Go somewhere</button>
                      </div>
                  </div>
              </div>
        )
    }
} 