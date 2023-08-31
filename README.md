# User Api

Projeto de API para gerenciamento de usuários utilizando Node.js e Express.

# Descrição

Este projeto consiste em uma API para gerenciamento de usuários, onde é possível realizar operações como criar, atualizar, recuperar e excluir informações de usuários. A API foi desenvolvida usando Node.js e Express, e também utiliza o pacote "dotenv" para gerenciar variáveis de ambiente.

# Instalação

1. Clone este repositório para sua máquina local.
2. Execute `npm install` para instalar as dependências do projeto.
3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, por exemplo:

```
PORT=3000
```

4. Execute `npm start` para iniciar o servidor da API.

# Rotas da API

- GET `/`: Rota de teste para verificar se a API está funcionando corretamente.

# Usuários

- GET `/public/usuariocliente`: Obter a lista de todos os usuários.
- GET `/public/usuariocliente/:id`: Obter informações de um usuário específico.
- DELETE `/public/usuariocliente/:id`: Excluir um usuário.
- POST `/public/usuariocliente`: Criar um novo usuário.
- PATCH `/public/usuariocliente/:id`: Atualizar informações de um usuário existente.

# Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie um branch para sua nova feature (`git checkout -b nova-feature`).
3. Faça suas alterações e faça commit delas (`git commit -m 'Adiciona nova feature'`).
4. Envie as alterações para o seu fork (`git push origin nova-feature`).
5. Abra um Pull Request descrevendo suas alterações.