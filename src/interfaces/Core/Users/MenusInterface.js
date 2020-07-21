import React, {Component} from "react";
import {getMenus} from "../../../apis/Core/MenusApi"
import Card from "../../../components/Card/Card";
import '../../../assets/css/Dashboard.css';

class MenusInterface extends Component {

    state = {
        isLoaded: false,
        menus: []
    }

    getMenusData = () => {
        getMenus()
            .then((menus) => {
                this.setState({
                    isLoaded: true,
                    menus,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    componentDidMount() {
        this.getMenusData()
    };

    render() {
        return (
            <div className="customContainer">
                <div className="row customRow">
                    { this.state.menus.map(menu =>
                        <Card title = {menu.menu_desc} price={'Rp. '+menu.menu_price} img = {'https://cdn4.iconfinder.com/data/icons/product-categories-filled-color/300/135944452Untitled-3-512.png'}/>
                    )}

                </div>
            </div>
        );
    }
}

export default MenusInterface;