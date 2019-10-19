import React, { Component } from 'react';
import Card from './card';

export default class CardWrapper extends Component {

    state = {
        products:[]
    }

    async componentDidMount() {
        const response = await fetch('https://react-mktplace.firebaseio.com/products/.json');
        const dataInJson = await response.json();
        let productsArray = [];
        for (let item in dataInJson) {
            productsArray.push(dataInJson[item]);
        }
        this.setState({products:productsArray})
    }

    render() {
        return(
            <div id="content-wrapper" className="container pt-3">
                <div className="row">
                    {
                        this.state.products.map( (product, index) => {
                            return <Card 
                                        imgUrl={product.imgUrl}  
                                        name={product.name}
                                        description={product.description}
                                        price={product.price}
                                        key={index}
                                    />
                        })
                    }
                </div>
            </div>
        )
    }
}