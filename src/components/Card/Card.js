import React, {Component} from 'react';

class Card extends Component {


    render() {
        const {title,price,img} = this.props
        return (
            <div className="card customCard" style={{
                width: 9+'rem',
            }}>
                <img className="card-img-top" src={img} alt="Card image cap"/>
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{price}</p>
                    </div>
            </div>
        );
    }
}

export default Card;