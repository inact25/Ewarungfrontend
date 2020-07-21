import React, {Component} from 'react';
import '../../assets/css/Transactions.css'
import MenusInterface from "../Core/Users/MenusInterface";

class TransactionLayout extends Component {
    render() {
        return (
            <div className="customTransaction">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 rightAsside">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Extra</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Service</a>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col-md-12">
                                    <MenusInterface/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 leftAsside">
                            <h3>Transaction List</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Menu
                                            </th>
                                            <th>
                                                QTY
                                            </th>
                                            <th>
                                                Prices
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                Ayam Goreng
                                            </td>
                                            <td>
                                                5
                                            </td>
                                            <td>
                                                Rp. 50.000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                2
                                            </td>
                                            <td>
                                                Ayam Crispi
                                            </td>
                                            <td>
                                                2
                                            </td>
                                            <td>
                                                Rp. 24.000
                                            </td>
                                        </tr>
                                        <tr >
                                            <td>
                                               3
                                            </td>
                                            <td>
                                                Sop Ayam
                                            </td>
                                            <td>
                                                3
                                            </td>
                                            <td>
                                                Rp. 21.000
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransactionLayout;