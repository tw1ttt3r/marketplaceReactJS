import React, { Component } from 'react';

export default class Card extends Component{
    render(){
        return(
            <div className="col-12 col-sm-4">
                  <div className="card">
                      <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                              the card's content.</p>
                          <p className="text-danger text-right">$5000.00</p>
                          <button className="btn btn-primary">Go somewhere</button>
                      </div>
                  </div>
              </div>
        )
    }
} 