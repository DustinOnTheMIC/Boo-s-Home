import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Navbar';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        const apiUrl = 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=615e1d4498b044e4ba1be2808a3b0c1f'
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState(data)
        });
    }

    render() {
        console.log('state')
        console.log(this.state);
        return (
            <div className="">
                <Header/>
                {this.state.products.map((items) => (
                    <span key={items.id} className="bg-white my-0 py-0 container-fluid d-flex col-4">
                        <div className="col-12 row">
                            <h1>id: {items.id}</h1>
                            <p>title: {items.title}</p>
                            <img src={items.image} alt={items.id}></img>
                        </div>
                    </span>
                ))}
                <Footer/>
            </div>
        );
    }
}

export default Product;