# HotWheels - CRUD
Desenvolvimento de uma aplicação utilizando reactJS, tailwindCSS e typescript para a cadeira de Desenvolvimento de sistemas front-end da PUC-RS.

## Framework (ViteJS)
O framework utilizado para elaboração do projeto foi o vitejs, que é um framework que possui rápida atualização, utiliza abordagem de carregamento de módulos nativa do ECMAScript, possui o HMR(Hot Module Replacement), permitindo a atualização instantânea durante o desenvolvimento e por fornecer um projeto com configurações mínimas a serem realizadas para dar inicio ao projeto.

## Estilização (Tailwindcss)
A escolha pelo tailwindcss para estilização do projeto se deu pela produtividade, customização flexível, manutenção simples, **consistência visual** e a fácil integração com react.

## Rotas
Para criação de das rotas da aplicação foi utilizado a biblioteca react-router-dom para melhor manipulação das rotas.
As páginas da aplicação se encontram dentro de ./src/pages/app
Todas páginas da aplicação foram envolvidas por um layout, que é um padrão que será utilizado para todas as rotas da aplicação.

```bash
Home: http://localhost:5174/
About: http://localhost:5174/about
Cars: http://localhost:5174/cars
AddCars: http://localhost:5174/add-cars
```

## Melhorias no SEO da página
Utilizando a lib react-helmet-async que permite a manipulação das META tags de cada página.