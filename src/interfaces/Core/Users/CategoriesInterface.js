import React, {Component} from "react";
import Card from "../../../components/Card/Card";
import '../../../assets/css/Dashboard.css';
import {getCategories} from "../../../apis/Core/CategoriesApi";

class CategoriesInterface extends Component {

    state = {
        isLoaded: false,
        categories: []
    }

    getCategoriesData = () => {
        getCategories()
            .then((categories) => {
                this.setState({
                    isLoaded: true,
                    categories,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    componentDidMount() {
        this.getCategoriesData()
    };

    render() {
        return (
            <div className="customContainer">
                <div className="row customRow">
                    { this.state.categories.map(category =>
                        <Card title = {category.categories_desc} price={'Rp. '+category.categories_price} img = {'https://cdn0.iconfinder.com/data/icons/seafood-8/64/Hot-pot-seafood-food-512.png'}/>
                    )}

                </div>
            </div>
        );
    }
}

export default CategoriesInterface;