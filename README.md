# Desafio 1 - Calindra

Construir uma aplicação na linguagem que preferir e achar mais prático. Neste desafio não
é preciso desenvolver um layout robusto, pode ser algo simples. A aplicação deverá ter um input de
texto e um botão busca que ao ser clicado realizará uma busca de produto através do consumo da
API:
https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook​.
Você deverá analisar a resposta da API e construir uma ​view ​com a lista dos produtos retornados.

Projeto foi desenvolvido com Typescript + React.

## Instruções para rodar e explicação
1. Instalei o node 16 LTS
2. Instale as dependências com npm.
3. Rode o projeto com npm run start.
4. Na caixa de busca enquanto digita, o input é preenchido com sugestões após o usuário para de digitar por 2 segundos.
5. Caso aperte enter ou mande pesquisar, ele irá mostrar o nome do produto com a contagem de clicks por ordem se score.
