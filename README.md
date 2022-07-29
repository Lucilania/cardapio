<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>

<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Este projeto tem como objetivo esboçar meu desejo na inclusão no mundo da programação. Hoje não consigo ver trabalhando em uma empresa, mas gostaria muito criar programa mobile, para pequenos comercio local  e ofertar esse serviço para apresentação e venda de produtos.
<p align="justify">Através dessa ferramenta continuarei apidando o que me foi lecionado e assim fomentar recolocação  no mercado de trabalho.


<br><br>

## 🚀 Descrição da API Cestas Solidárias

<br>

<p align="justify">O projeto é uma API REST que permite donos de comércio expor sua mercadoria para possível venda.

  
<br>

## 🔗 Link 

- [Apresentação]https://docs.google.com/presentation/d/1pAAJv_GnIEKEMzWAo3_FzHNOCkOCeNu3z1cStVwkOlw/edit?usp=sharing)

<br>

## ⚙️ Funcionalidades/Objetivos

- Classificar produto;
- Expor produto;

<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

<br>

## 📁 Arquitetura MVC 

```
 📁 cestas-solidarias
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 menuController.js
   |         
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |     
   |    |- 📁 models
   |         |- 📑 menuModels.js
   |              
   |    |- 📁 routes
   |         |- 📑 menuRoutes.js 
   |     
   |    |- 📑 app.js
   |     
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:8080


    * Utilize o [Postman](https://www.postman.com/) 

<br>


## 🔃 Manipulação das Rotas de Usuários que serão ajudados:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/users`                | Retorna todos os usuários            |
| GET          | `/users/private`        | Retorna todos os dados               |
| POST         | `/users/create`         | Cria/cadastra um novo usuário        |
| PUT          | `/users/update/:id`     | Altera informações de um usuário     |
| DELETE       | `/users/delete/:id`     | Deleta um usuário específico         |

<br>

## 🔃 Manipulação das Rotas das pessoas que fizeram Login:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/helpers`            | Retorna todos os usuários                  |
| GET          | `/helpers/private`    | Retorna todos os dados sem restrição       |
| POST         | `/helpers/register`   | Cria um novo cadastro/login                |
| POST         | `/helpers/login `     | Faz o login                                |
| PUT          | `/helpers/update/:id` | Altera informações de um usuário           |
| DELETE       | `/helpers/delete/:id` | Deleta um usuário específico               |

<br>
