# Projeto Pokédex

![Ionic](https://img.shields.io/badge/Ionic-7.2.0-blue.svg) ![Angular CLI](https://img.shields.io/badge/Angular_CLI-17.3.8-red.svg) ![Node](https://img.shields.io/badge/Node-18.17.0-green.svg) ![npm](https://img.shields.io/badge/npm-10.4.0-red.svg) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-blueviolet.svg) ![PokeAPI](https://img.shields.io/badge/PokeAPI-RESTful-9cf.svg)

Este projeto foi desenvolvido utilizando as tecnologias Ionic e Angular para criar uma Pokédex, uma enciclopédia virtual de Pokémon que proporciona uma experiência informativa para os fãs. O projeto utiliza os serviços RESTful da API PokeAPI (https://pokeapi.co/), permitindo a visualização de detalhes sobre o Pokémon, como estatísticas, tipos e fraquezas.

A interface intuitiva e responsiva torna a navegação pela Pokédex simples e de fácil utilização em qualquer dispositivo. Os usuários podem marcar o pokémon como favorito e na navegação da página detalhes acompanhar a evolução do pokémon.

Com o foco na usabilidade e na experiência do usuário, este projeto busca proporcionar uma jornada emocionante pelo universo Pokémon.

## Estilo de Codificação

Este projeto segue o estilo de codificação padrão da comunidade [Angular](https://angular.io/guide/styleguide) Além disso, o estilo da aplicação foi desenvolvido utilizando o framework Bootstrap.

## Funcionalidades

### Página Home

- **Descrição:** Página inicial que exibe um card com informações básicas de um Pokémon, além de um botão "Detalhes" que direciona para a página de detalhes desse Pokémon.

- **Navegação:** 

- Tela Início

![Tela Início](assets/imgs/home.png)

- Menu navegação

No menu, há a opção de acessar a lista de favoritos.

![Menu navegação](assets/imgs/navbar.png)

- Botão detalhes

Botão detalhes para acessar as características do Pokémon

![Botão detalhes](assets/imgs/btn-details.png)

![Navegando detalhes](assets/gif/page-details-tutorial.gif)

### Página Detalhes

- **Descrição:** Exibe informações detalhadas de um Pokémon, incluindo características como ataque, defesa, velocidade, altura, peso, categoria, habilidades, tipos e fraquezas.

- **Interatividade:** 

- Tela Detalhes

![Tela Detalhes](assets/imgs/pokemon-details.png)

- Botão favoritos

Possui um botão para favoritar o Pokémon.

![Botão favoritos](assets/imgs/btn-favorites.png)

![Navegando favoritos](assets/gif/page-details-tutorial.gif)


- Botão páginação

Botões de navegação no rodapé da página podendo acompanhar a evolução do pokémon

![Botão páginação](assets/imgs/btn-navigation.png)

- Navegação 

Essas imagens mostram a navegação na página de detalhes do Pokémon.

![Navegando em Detalhes Página dois](assets/imgs/details-pagetwo.png)

![Navegando em Detalhes Página três](assets/imgs/details-pagethree.png)

![Navegando páginas](assets/gif/navigation-tutorial.gif)

### Página Favoritos

- **Descrição:** Apresenta uma lista dos Pokémon favoritados, com a opção de excluí-los da lista de favoritos.

- Tela Favoritos

![Tela Favoritos](assets/imgs/page-favorites.png)

- Botão excluir

Quando o usuário desejar remover um Pokémon de sua lista de favoritos

![Botão excluir](assets/imgs/btn-excluir.png)

![Removendo favoritos](assets/gif/remove-favorites-tutorial.gif)

## Tecnologias Utilizadas

- Ionic
- Angular
- Bootstrap
- PokeAPI (https://pokeapi.co/)

## Como Executar Projeto

1. Clone o repositório.
2. Certifique-se de ter o Node.js e o npm instalados.
2. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências
3. Execute `ionic serve` para iniciar o servidor de desenvolvimento e visualizar o projeto no navegador.

## Testes Unitários

[![Jasmine](https://img.shields.io/badge/Jasmine-5.1.0-brightgreen.svg)] [![Karma](https://img.shields.io/badge/Karma-6.4.0-orange.svg)]

O projeto inclui testes unitários para garantir a qualidade do código.
Os testes são escritos utilizando o framework de testes Jasmine e são executados com o auxílio do Karma.

### Como Executar os Testes

1. Certifique-se de ter o Node.js e o npm instalados.
2. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências de desenvolvimento.
3. Execute `npm test` para rodar os testes unitários com o Karma.

## Criado por

Este sistema foi desenvolvido por [Taís Oliveira]