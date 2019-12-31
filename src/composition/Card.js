import React from 'react';
import './Card.css';

export class Card extends React.Component {
    render() {
        return(
            <div className="Card" key={this.props.key}>
                <button type="button">delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
};