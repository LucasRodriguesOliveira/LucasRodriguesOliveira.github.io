import axios from 'axios';

/* 
  Sem o acesso ao usuário não é possível conectar
  Portanto, deixarei alguns MOCK's contendo as informações contidas na documentação,
  funcionando como uma Falsa api request
*/
const API = axios.create({ baseURL: 'http://servicosflex.rpinfo.com.br:9000' });

/*
  Caso faça acesso a alguma api, substitua:
    -> Arquivo: ./src/pages/Produtos/index.js
      -> Linhas:
        -> 17: const produtos = (await
          API.get(`/v1.5/produtounidade/listaprodutos/${lastId}/unidade/${cnpj}`)).response;
        -> 18: const {unidades: unidade} = (await API.get(`/v1.0/unidades/${cnpj}`)).response;
    -> Arquivo: ./src/pages/Main/index.js
      -> Linhas:
        -> 35: const res = API.get(`/v1.0/unidades`); // espera-se um array
        -> 36: const {unidades} = res;
*/
API.MOCK_UNIDADES = async () => ({
  "Codigo": "001",
  "Nome": "Matriz - Empresa Demonstração Ltda",
  "RazaoSocial": "Matriz - Empresa Demonstração Ltda",
  "CNPJ": "00000000000000",
  "InscEstadual": "",
  "InscMunicipal": "",
  "Endereco": "",
  "Numero": "",
  "Complemento": "",
  "Bairro": "",
  "CEP": "",
  "CaixaPostal": "",
  "Municipio": "Curitiba",
  "UF": "PR",
  "Fone": "",
  "Email": ""
});
API.MOCK_PRODUTOS_UNIDADE = async (lastID, CNPJ) => ([{
  "Codigo": 10162,
  "SKU": 10162,
  "CodigoBarras": 1050695,
  "CodigoNCM": 18069000,
  "CodigoCaixa": 16,
  "Descricao": "Kinder Ovo",
  "Complemento": "",
  "Marca": "Dorizon",
  "Estoque": 0,
  "Preco": 3.89,
  "Grupo": 10000,
  "Oferta": "N",
  "DataOferta": "18-04-2018",
  "PrecoNormal": 0,
  "CodigoUnidade": 1,
  "CodigoDepartamento": 999,
  "Departamento": "Geral",
  "Ativo": true,
  "CodigoTributario": 905,
  "Estoque1": -873,
  "Estoque2": 0,
  "Estoque3": 0,
  "Estoque4": 0,
  "Estoque5": 0,
  "PrecoLista": 0,
  "PrecoPDV": 3.89,
  "PrecoPDV3": 0,
  "PrecoPDV4": 0,
  "PrecoPDV5": 0,
  "PrecoEtiqueta": 3.2,
  "PrecoCartaz": 0,
  "PrecoVenda3": 0,
  "PrecoVenda4": 0,
  "PrecoVenda5": 0,
  "FatorPr3": 0,
  "FatorPr4": 0,
  "FatorPr5": 0,
  "CustoCompra": 76.3639,
  "CustoEmpresa": 76.3639,
  "CustoFiscal": 76.3639,
  "CustoMedio": 76.3639,
  "CustoTransferencia": 76.3639,
  "TipoEmbalagem": "UN",
  "QuantidadeEmbalagem": 0,
  "CodEstoque": 1,
  "EstoqueMinimo": 10,
  "EstoqueMaximo": 300,
  "VendaMediaDiaria": 15
},
{
  "Codigo": 10163,
  "SKU": 10162,
  "CodigoBarras": 1050695,
  "CodigoNCM": 18069000,
  "CodigoCaixa": 16,
  "Descricao": "Pão de Forma",
  "Complemento": "",
  "Marca": "Visconti",
  "Estoque": 10,
  "Preco": 1.00,
  "Grupo": 10000,
  "Oferta": "N",
  "DataOferta": "18-04-2018",
  "PrecoNormal": 0,
  "CodigoUnidade": 1,
  "CodigoDepartamento": 999,
  "Departamento": "Geral",
  "Ativo": true,
  "CodigoTributario": 905,
  "Estoque1": -873,
  "Estoque2": 0,
  "Estoque3": 0,
  "Estoque4": 0,
  "Estoque5": 0,
  "PrecoLista": 0,
  "PrecoPDV": 3.89,
  "PrecoPDV3": 0,
  "PrecoPDV4": 0,
  "PrecoPDV5": 0,
  "PrecoEtiqueta": 3.2,
  "PrecoCartaz": 0,
  "PrecoVenda3": 0,
  "PrecoVenda4": 0,
  "PrecoVenda5": 0,
  "FatorPr3": 0,
  "FatorPr4": 0,
  "FatorPr5": 0,
  "CustoCompra": 76.3639,
  "CustoEmpresa": 76.3639,
  "CustoFiscal": 76.3639,
  "CustoMedio": 76.3639,
  "CustoTransferencia": 76.3639,
  "TipoEmbalagem": "UN",
  "QuantidadeEmbalagem": 0,
  "CodEstoque": 1,
  "EstoqueMinimo": 10,
  "EstoqueMaximo": 300,
  "VendaMediaDiaria": 15
}]);

export default API;