import React, { Component } from 'react';
import "./styles.css"
import api from "./components/services/api";
import Moeda from "./components/Moeda/Moeda";

class App extends Component {
  state = {
    cotacao: 0,
    quantidade: 0, 
    moeda: "",
    name: ""
  }

  handleValue = event => {
    this.setState({quantidade: event.target.value});
  }

  handleMoeda = event => {
    this.setState({moeda: event.target.value});
  }

  handleForm = e => {
    e.preventDefault();
  }

  handle = async () => {
    const response = await api.get(`/${this.state.moeda}`);
    
    if(this.state.moeda != ""){
      this.setState({
        cotacao: response.data[0].ask,
        name: response.data[0].name
      });
    } else {
      return;
    } 
  };

  render() {
    return(
      <div className="app">
        <form onSubmit={this.handleForm}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand">
              Conversor - Moeda
            </h1>
            <div className="collapse navbar-collapse">
            <div className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" name="valor" placeholder="Valor em R$" aria-label="Search" onChange={this.handleValue} />
              <select className="form-control sm-2" name="select" onChange={this.handleMoeda}>
                <option value="USD">
                  
                </option>
                <option value="USD">
                  Dolar
                </option>
                <option value="EUR-BRL">
                  Euro
                </option>
                <option value="GBP-BRL">
                  Libra
                </option>
                <option value="BTC-BRL">
                  Bitcoin
                </option>
                <option value="LTC-BRL">
                  Litecoin
                </option>
              </select>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handle} type="submit">Converter</button>
            </div>
          </div>
          </nav>
        </div>
        <div className="container">
          <Moeda prop={this.state} />
        </div>
        

        </form>
      </div>
    );
  }
}

export default App;
