const ModeloTabelaProd = require('../rotas/produtos/ModeloTabelaProdutos');
const ModeloTabelaUsu = require('../rotas/usuarios/ModeloTabelaUsuarios');
const ModeloTabelaEnd = require('../rotas/enderecos/ModelotabelaEnderecos');


ModeloTabelaProd.sync().then(() => console.log('Tabela de produtos criada com sucesso!')).catch(console.log);

ModeloTabelaUsu.sync().then(() => console.log('Tabela de usuários criada com sucesso!')).catch(console.log);

ModeloTabelaEnd.sync().then(() => console.log('Tabela de endereços criada com sucesso!')).catch(console.log);