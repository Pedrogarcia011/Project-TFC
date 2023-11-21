# TFC: Trybe Futebol Clube

Bem-vindo ao TFC, o TFC é um site informativo sobre partidas e classificações de futebol! ⚽️, uma plataforma robusta e flexível para gerenciamento de dados de futebol. Nosso projeto possibilita que os desenvolvedores realizem operações CRUD (Criar, Ler, Atualizar, Deletar) relacionadas a times, usuários, partidas e placares. Além disso, oferecemos recursos avançados de autenticação para garantir a segurança dos dados e funcionalidades protegidas.

## Estrutura do projeto:
O Trybe Futebol Clube é um projeto estruturado, composto por quatro entidades essenciais que formam sua base de funcionamento.

- ### Banco de Dados:
  O banco de dados é um container Docker MySQL, configurado no docker-compose por meio de um serviço denominado db. Ele desempenha o papel crucial de fornecer dados para o serviço backend. Durante a execução dos testes, o acesso ocorre através do Sequelize e pela porta 3306 do localhost. Os desenvolvedores também têm a opção de conectar-se a um Cliente MySQL, como Workbench, Beekeeper, DBeaver, etc., utilizando as credenciais configuradas no docker-compose para o serviço db.

- ### Back-End:
  O ambiente de back-end é onde a maioria das implementações necessárias será realizada. Deve ser executado na porta 3001, pois o front-end faz requisições para essa porta por padrão. A inicialização da aplicação ocorre a partir do arquivo app/backend/src/server.ts. Certifique-se de que o Express está sendo executado e a aplicação está ouvindo a porta proveniente das variáveis de ambiente.

- ### Front-End:
  O front-end já todos os testes a partir do requisito de login utilizam o Puppeteer para simular a interação de uma pessoa acessando o site http://localhost:3000/. O front-end se comunica com o serviço de back-end por meio da URL http://localhost:3001, utilizando os endpoints que devem ser construídos conforme os requisitos. Recomenda-se que, sempre que implementar um requisito no back-end, acesse a página no front-end que consome a implementação para validar se está funcionando conforme o esperado.

- ### Docker:
  O docker-compose é responsável por unir todos os serviços containerizados (backend, frontend e db) e iniciar o projeto completo com o comando npm run compose:up. Certifique-se de configurar corretamente os Dockerfiles nas raízes do front-end e back-end para conseguir inicializar a aplicação.

## Principais Características:

- ### Operações CRUD de Times: 
  Os usuários podem criar, ler, atualizar e excluir times de maneira fácil e eficiente. Isso proporciona a construção de um ambiente completo para o gerenciamento de 
  dados de futebol. Álem disso conta com testes que garantem a integridade do código.

- ### Autenticação Segura:
  Implementamos um sistema de autenticação robusto para garantir que apenas usuários autorizados possam acessar recursos protegidos. Isso contribui para a proteção dos 
  dados e a manutenção da integridade da plataforma.

- ### Modelo MSC (Model-Service-Controller):
  Seguimos uma arquitetura de código organizada com base no Modelo-Serviço-Controlador (MSC) para manter nosso código bem estruturado, escalável e de fácil manutenção.

- ### Flexibilidade:
  Nossa API é altamente flexível e pode ser facilmente personalizada para atender às necessidades específicas do seu projeto. Os desenvolvedores podem estender as 
  funcionalidades de acordo com os requisitos do gerenciamento de dados de futebol.

## Tecnologias Utilizadas

- **Node.js**: A base da nossa aplicação, que permite a construção de servidores web escaláveis e eficientes.
- **TypeScript**: Um superset JavaScript que adiciona tipagem estática ao código, melhorando a manutenção e prevenindo erros.
- **Testes**: Processo de avaliação da aplicação para garantir que funcionalidades estejam corretas e não afetem outras partes do sistema.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres.
- **Express**: Um framework web que simplifica o desenvolvimento de APIs RESTful em Node.js.
- **MySQL**: Banco de dados relacional para armazenar os posts e informações dos usuários.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js que simplifica a interação com bancos de dados SQL.
- **JWT (JSON Web Tokens)**: Utilizado para autenticação segura e criação de tokens.

## Como Executar a API

1. Certifique-se de ter o Docker instalado em sua máquina.

2. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/trybe-futebol-clube-api.git

3. Acesse o diretório do projeto:
   ```bash
   cd trybe-futebol-clube-api

4. Crie um arquivo .env no diretório raiz e defina as variáveis ​​de ambiente:
    -DB_HOST=seu-host-do-mysql
    -DB_USER=seu-usuario-do-mysql
    -DB_PASSWORD=sua-senha-do-mysql
    -DB_NAME=nome-do-banco-de-dados
    -JWT_SECRET=chave-secreta-para-o-jwt

## Tecnologias Utilizadas:
  - Node.js
  - Docker
  - Express
  - MySQL
  - Sequelize
  - JWT (Tokens da Web JSON)
