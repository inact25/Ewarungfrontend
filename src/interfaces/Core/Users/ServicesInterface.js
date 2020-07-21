import React, {Component} from "react";
import {getServices} from "../../../apis/Core/ServicesApi";
import Card from "../../../components/Card/Card";
import '../../../assets/css/Dashboard.css';

class ServicesInterface extends Component {

    state = {
        isLoaded: false,
        services: []
    }

    getServicesData = () => {
        getServices()
            .then((services) => {
                this.setState({
                    isLoaded: true,
                    services,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    componentDidMount() {
        this.getServicesData()
    };

    render() {
        return (
            <div className="customContainer">
                <div className="row customRow">
                    { this.state.services.map(service =>
                        <Card title = {service.services_desc} price={'Rp. '+service.services_price} img = {'https://cdn4.iconfinder.com/data/icons/tableware-cooker/512/49-foodservicecartrestaurant-512.png'}/>
                    )}

                </div>
            </div>
        );
    }
}

export default ServicesInterface;