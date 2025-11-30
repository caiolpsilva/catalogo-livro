# Catálogo Digital (SPA) - React + React Router

Como rodar:

1. Instale dependências:

```powershell
cd "c:\Users\caio.LAPTOP-265DBHIG\Documents\catalogo-livro\catalogo-livros"
npm install
```

2. Rode em modo de desenvolvimento:

```powershell
npm run dev
```

Principais tecnologias:

- React
- React Router DOM (v6)
- Vite

Onde os requisitos foram aplicados:

- **React Router**: Em `src/App.jsx`, as rotas são definidas utilizando os componentes `Routes` e `Route` do React Router DOM. Isso permite a navegação entre páginas sem recarregar a aplicação, criando uma Single Page Application (SPA). Por exemplo, a rota raiz (`/`) renderiza o `MainLayout`, enquanto `/catalogo` e `/catalogo/:id` renderizam as páginas `Catalogo` e `LivroDetalhe`, respectivamente.

- **Layout reutilizável**: O arquivo `src/layouts/MainLayout.jsx` implementa um layout compartilhado que inclui o `Header`, um menu de navegação com links para "Início" e "Catálogo", e o componente `<Outlet />` do React Router, que renderiza o conteúdo das páginas filhas. Isso garante consistência visual e estrutural em todas as páginas da aplicação.

- **Navegação declarativa**: A navegação declarativa é realizada através dos componentes `Link` e `NavLink` do React Router. Em `MainLayout.jsx`, `NavLink` é usado para os links do menu, aplicando uma classe "active" quando a rota está ativa. Em `BookCard.jsx`, `Link` é utilizado para navegar para os detalhes de um livro específico, como `<Link to={`/catalogo/${livro.id}`}>Ver detalhes</Link>`.

- **Navegação programática**: O hook `useNavigate()` permite navegação programática baseada em eventos. Em `src/pages/Home.jsx`, um botão chama `navegar('/catalogo')` para redirecionar ao catálogo. Em `src/pages/LivroDetalhe.jsx`, o botão "Voltar" usa `navegar(-1)` para retornar à página anterior no histórico.

- **URLs dinâmicas e `useParams()`**: URLs dinâmicas são usadas para páginas detalhadas. Em `src/pages/LivroDetalhe.jsx`, o hook `useParams()` extrai o parâmetro `:id` da URL (ex.: `/catalogo/1`), permitindo buscar e exibir os detalhes do livro correspondente do arquivo `books.json`.

- **Hook customizado**: O arquivo `src/hooks/useLocalStorage.js` contém um hook personalizado para interagir com o localStorage do navegador. Esta sendo usado em `src/pages/Catalogo.jsx` para persistir a lista de livros após remoções, garantindo que as alterações sejam salvas entre sessões. Isso permite que remoções de livros sejam mantidas mesmo após recarregar a página.

- **Consumo de dados locais**: Os dados dos livros são consumidos localmente via `fetch('/data/books.json')`. Em `src/pages/Catalogo.jsx`, isso carrega a lista completa de livros para exibição e filtragem. Em `src/pages/LivroDetalhe.jsx`, busca o livro específico pelo ID, com tratamento de estados de carregamento e erro usando componentes como `Loading` e `ErrorMessage`.

Arquivos relevantes:

- `src/layouts/MainLayout.jsx` - layout com menu e `Outlet`.
- `src/pages/Home.jsx` - página inicial com botão que navega para `/catalogo`.
- `src/pages/Catalogo.jsx` - lista de livros, busca com foco automático, filtros e contadores.
- `src/pages/LivroDetalhe.jsx` - detalhes do livro via rota dinâmica.
- `src/components/BookCard.jsx` - cartão do livro com link para detalhes.
- `src/components/Loading.jsx` e `src/components/ErrorMessage.jsx` - UX de carregamento/erro.

Observações:

- Ajuste de nomes de variáveis em português foi aplicado nas novas páginas (`livros`, `busca`, `carregando`, `erro`).
- O JSON com os livros está em `public/data/books.json`.

