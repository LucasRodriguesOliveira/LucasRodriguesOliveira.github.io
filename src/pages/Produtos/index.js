import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import './style.css';

export default class Produtos extends Component {
  state = {
    unidade: {},
    produtos: [],
    lastId: 0,
    currency: 'BRL'
  };

  async componentDidMount() {
    const { cnpj } = this.props.match.params;
    const { lastId } = this.state;
    const produtos = await API.MOCK_PRODUTOS_UNIDADE(lastId, cnpj);
    const unidade = await API.MOCK_UNIDADES();

    this.setState({produtos, unidade});
  }

  render() {
    const { produtos, unidade, currency } = this.state;

    return (
      <div className="product-list">
        <h1>{unidade.Nome}</h1>
        <h2>Lista de Produtos</h2>
        <Link to='/'>Voltar</Link>
        {produtos.map(p => (
          <article key={p.Codigo}>
            <h3>{p.Descricao}</h3>
            <p>{p.Marca}</p>
            <div className="aditional">
              <div>Quantidade: {p.Estoque}</div>
              <div>{this.getFloatLocalCurrency(p.Preco, currency, 2)}</div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  /* v -> Value to be modified */
  /* c -> The current currency */
  /* f -> format. Indicates if should return fixed floating values*/
  getFloatLocalCurrency = (v, c, f = -1) => {
    const currency = {
      'BRL': "R$",
      'USD': "$",
      'EUR': '&euro;'
    }

    const value = f !== -1 ? v.toFixed(f) : v;

    return (currency[c] + ' ' + value);
  }
}