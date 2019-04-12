import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import './style.css';

export default class Main extends Component {
  state = {
    unidades: [],
    page: 1,
    limit: 10
  };
  
  componentDidMount() {
    this.carregarUnidades();
  }

  render() {
    const { unidades } = this.state;

    return (
      <div className="unidades-lista">
        <h2>Unidades</h2>
        {unidades.map(u => (
          <article key={u.Codigo}>
            <strong>{u.Nome}</strong>
            <p><strong>Razão Social:</strong> {u.RazaoSocial}</p>
            <Link to={`/produtos/${u.CNPJ}`}>Produtos</Link>
          </article>
        ))}
      </div>
    );
  }

  carregarUnidades = async () => {
    const res = await API.MOCK_UNIDADES();
    const unidades = new Array(res);
    const page = 
      unidades.length > 0 ? parseInt(unidades[unidades.length-1].Codigo) : 1;
    this.setState({unidades, page});
  }
}