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

- React Router: `src/App.jsx` define as rotas usando `Routes` e `Route`.
- Layout reutilizável: `src/layouts/MainLayout.jsx` contém `Header`, menu e `<Outlet />`.
- Navegação declarativa: uso de `Link` e `NavLink` em `MainLayout.jsx` e `BookCard.jsx`.
- Navegação programática: `useNavigate()` em `src/pages/Home.jsx` e `src/pages/LivroDetalhe.jsx`.
- URLs dinâmicas e `useParams()`: `src/pages/LivroDetalhe.jsx` usa `useParams()` para ler `:id`.
- Hook customizado: `src/hooks/useLocalStorage.js` preservado e disponível para uso.
- Consumo de dados locais: `fetch('/data/books.json')` nas páginas `Catalogo` e `LivroDetalhe`.

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

