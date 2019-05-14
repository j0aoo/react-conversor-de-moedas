import React, { Component } from "react";
import "./styles.css";

class Moeda extends Component {
	render() {
		return(
			<div className="info">
                <ul className="list-group list-group-flush">
                	<li className="list-group-item"><span>Moeda: {this.props.prop.name} </span></li>
                	<li className="list-group-item"><span>Cotação: {this.props.prop.cotacao} </span></li>
                    <li className="list-group-item">Valor convertido: {this.props.prop.quantidade * this.props.prop.cotacao}</li>
                </ul>
            </div>
		);
	}
}

export default Moeda;