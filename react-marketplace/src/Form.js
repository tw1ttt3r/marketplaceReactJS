import React, { Component } from 'react';

export default class Formulario extends Component {

    constructor(props) {
        super();
        this.state = {
            name:'',
            description:'',
            imgUrl:'',
            price:0
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]:event.target.value })      
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, description, price, imgUrl } = this.state;
        fetch('https://react-mktplace.firebaseio.com/products/.json',
        {
            method:'POST',
            body: JSON.stringify({ name, description, price, imgUrl })
        })
        .then( () => {
            alert("exitoso")
            /*this.setState({
                name:'',
                description:'',
                imgUrl:'',
                price:0
            });*/
        } );
    }

    render(){
        const { name, description, price, imgUrl } = this.state;
        return(
            <div className="row">
                <div className="col-12 col-sm-4 offset-sm-4 border border-secondary p-3 bg-light mt-3 rounded">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="product-name">Nombre del producto</label>
                            <input type="text" name="name" className="form-control" id="product-name"
                                placeholder="Ingresa el nombre de tu producto" value={name} 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-description">Descripcion</label>
                            <input type="text" name="description" className="form-control" id="product-description" placeholder="Describe" value={description} onChange={this.handleChange }  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-price">Precio</label>
                            <input type="text" name="price" className="form-control" id="product-price"
                                placeholder="Ingresa el precio de tu producto"
                                value={price}  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-img">Precio</label>
                            <input type="text" name="imgUrl" className="form-control" id="product-img" placeholder="Pon una imagen para tu producto"
                             onChange={this.handleChange} 
                             value={imgUrl}  />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}