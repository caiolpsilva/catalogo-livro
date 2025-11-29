# Análise do Projeto - Catálogo Digital com React + React Router

Este documento analisa o projeto "Catálogo Digital de Livros" com base nos requisitos da Atividade Avaliativa – 2ª Unidade, explicando como e onde cada requisito foi atendido.

## 1. Contexto da Avaliação

O projeto original "Catálogo de Livros" foi expandido para incluir os novos conteúdos estudados na Unidade 2, transformando-o em uma SPA completa com navegação funcional baseada em rotas.

### Navegação em SPAs (Single Page Applications)
- **Implementação**: O projeto utiliza React Router DOM v6+ para gerenciar a navegação sem recarregar a página.
- **Localização**: 
  - `src/main.jsx`: Envolve a aplicação com `<BrowserRouter>`.
  - `src/App.jsx`: Define as rotas usando `<Routes>` e `<Route>`.
  - `src/layouts/MainLayout.jsx`: Usa `<Outlet />` para renderizar o conteúdo das páginas.

### React Router DOM (v6+)
- **Implementação**: Instalado e configurado conforme especificado.
- **Localização**: 
  - `package.json`: Dependência `"react-router-dom": "^6.14.1"`.
  - `src/main.jsx`: Importa e usa `<BrowserRouter>`.

### URLs dinâmicas
- **Implementação**: Rota `/catalogo/:id` para detalhes dinâmicos do livro.
- **Localização**: `src/App.jsx`: `<Route path="catalogo/:id" element={<LivroDetalhe />} />`.

### Rotas aninhadas
- **Implementação**: Rotas aninhadas sob `<MainLayout />`.
- **Localização**: `src/App.jsx`: Estrutura com `<Route path="/" element={<MainLayout />}>` contendo rotas filhas.

### Navegação declarativa (<Link>)
- **Implementação**: Uso de `<Link>` e `<NavLink>` para navegação.
- **Localização**: 
  - `src/layouts/MainLayout.jsx`: `<NavLink>` no menu para "Início" e "Catálogo".
  - `src/components/BookCard.jsx`: `<Link to={`/catalogo/${livro.id}`}>` para "Ver detalhes".

### Navegação programática (useNavigate())
- **Implementação**: Uso de `useNavigate()` para navegação imperativa.
- **Localização**: 
  - `src/pages/Home.jsx`: `const navegar = useNavigate();` e `navegar('/catalogo')` no botão "Entrar no Catálogo".
  - `src/pages/LivroDetalhe.jsx`: `navegar(-1)` no botão "Voltar".

### Leitura de parâmetros da URL (useParams())
- **Implementação**: Extração do parâmetro `id` da URL para localizar o livro.
- **Localização**: `src/pages/LivroDetalhe.jsx`: `const { id } = useParams();`.

### Layouts reutilizáveis com <Outlet />
- **Implementação**: Componente `MainLayout` com cabeçalho, menu e `<Outlet />`.
- **Localização**: `src/layouts/MainLayout.jsx`: Estrutura com `<Outlet />` para conteúdo dinâmico.

## 2. Objetivo Geral

O projeto demonstra domínio dos conceitos listados através de uma SPA completa.

### Componentização
- **Implementação**: Código dividido em componentes reutilizáveis.
- **Localização**: 
  - `src/components/`: BookCard, Loading, ErrorMessage, SearchBar, Counters, Header.
  - `src/pages/`: Home, Catalogo, LivroDetalhe.
  - `src/layouts/`: MainLayout.

### Hooks essenciais (useState, useEffect, useRef)
- **Implementação**: Uso extensivo dos hooks para gerenciamento de estado e efeitos.
- **Localização**: 
  - `useState`: Em `src/pages/Catalogo.jsx` para livros, busca, carregando, erro.
  - `useEffect`: Em `src/pages/Catalogo.jsx` e `src/pages/LivroDetalhe.jsx` para carregar dados.
  - `useRef`: Em `src/components/SearchBar.jsx` para foco automático no input.

### Hook customizado (useLocalStorage)
- **Implementação**: Hook personalizado para persistência em localStorage.
- **Localização**: `src/hooks/useLocalStorage.js`: Implementação completa com `useState` e `useEffect`.

### React Router (rotas, navegação, parâmetros)
- **Implementação**: Como detalhado acima, cobrindo rotas, navegação declarativa/programática e parâmetros.

### Layout reutilizável
- **Implementação**: `MainLayout` compartilhado entre páginas.
- **Localização**: `src/layouts/MainLayout.jsx`.

### Consumo de dados locais (books.json)
- **Implementação**: Dados carregados via fetch de `/data/books.json`.
- **Localização**: 
  - `public/data/books.json`: Arquivo com dados dos livros.
  - `src/pages/Catalogo.jsx` e `src/pages/LivroDetalhe.jsx`: Uso de `fetch` para carregar dados.

### Gerenciamento de estado e formulários
- **Implementação**: Estado gerenciado com `useState` para busca e filtros.
- **Localização**: `src/pages/Catalogo.jsx`: Estado para busca e filtragem em tempo real.

## 3. Funcionalidades Obrigatórias (com React Router)

### / — Página Inicial
- **Implementação**: Página de apresentação com botão para navegação programática.
- **Localização**: `src/pages/Home.jsx`: Usa `useNavigate()` para ir a `/catalogo`.

### /catalogo — Lista de Livros
- **Implementação**: Página com busca, filtragem, contadores e listagem.
- **Localização**: `src/pages/Catalogo.jsx`:
  - Busca com foco automático: `SearchBar` com `useRef`.
  - Filtragem: `livrosFiltrados` baseado em título/autor.
  - Contadores: `Counters` mostrando total e filtrados.
  - Listagem: Carregada via `useEffect`.
  - Botão "Ver detalhes": `BookCard` com `<Link>`.

### /catalogo/:id — Página de Detalhes do Livro
- **Implementação**: Página que lê parâmetro, encontra livro e mostra detalhes com botão voltar.
- **Localização**: `src/pages/LivroDetalhe.jsx`:
  - `useParams()` para obter `id`.
  - Busca do livro no array.
  - Detalhes: título, autor, ano, etc.
  - Botão "Voltar": `useNavigate(-1)`.

## 4. Layout Reutilizável (Obrigatório)

- **Implementação**: `MainLayout` com cabeçalho, menu e `<Outlet />`.
- **Localização**: `src/layouts/MainLayout.jsx`: Estrutura exata conforme especificado, com `<NavLink>` no menu.

## 5. Requisitos Técnicos (Complementares do MVP original)

### Navegação declarativa
- **Implementação**: Uso de `<Link>` e `<NavLink>`.
- **Localização**: Como detalhado em Navegação declarativa acima.

### Navegação programática
- **Implementação**: Pelo menos uma ocorrência de `useNavigate()`.
- **Localização**: `src/pages/Home.jsx` e `src/pages/LivroDetalhe.jsx`.

### Rotas dinâmicas
- **Implementação**: `/catalogo/:id`.
- **Localização**: `src/App.jsx` e `src/pages/LivroDetalhe.jsx`.

### useParams
- **Implementação**: Para localizar livro selecionado.
- **Localização**: `src/pages/LivroDetalhe.jsx`.

### useNavigate
- **Implementação**: Aparece em pelo menos um ponto.
- **Localização**: `src/pages/Home.jsx` e `src/pages/LivroDetalhe.jsx`.

### Layouts reutilizáveis
- **Implementação**: Componente com `<Outlet />`.
- **Localização**: `src/layouts/MainLayout.jsx`.

### Estrutura clean de rotas (React Router v6)
- **Implementação**: Uso de `<Routes>`, `<Route>`, estrutura aninhada.
- **Localização**: `src/App.jsx`.

## 6. Organização Recomendada das Pastas

A estrutura de pastas segue exatamente a recomendada:

- `src/components/`: BookCard.jsx, Loading.jsx, ErrorMessage.jsx, etc.
- `src/pages/`: Home.jsx, Catalogo.jsx, LivroDetalhe.jsx
- `src/layouts/`: MainLayout.jsx
- `src/hooks/`: useLocalStorage.js
- `src/data/`: books.json (localizado em `public/data/`)
- `src/App.jsx`, `src/main.jsx`

## 7. Entregáveis

O projeto está completo e inclui:
- Projeto React completo na pasta `catalogo-livros/`.
- README.md (já existente).
- Prints de tela podem ser gerados das páginas funcionais.

## 8. Critérios de Avaliação

### Funcionamento das Rotas
- Navegação sem reload: Implementada via React Router.
- Links funcionando: `<Link>` e `<NavLink>` funcionais.
- Página de detalhes acessível via rota dinâmica: `/catalogo/:id`.

### Aplicação correta do React Router
- BrowserRouter: Em `src/main.jsx`.
- Routes / Route: Em `src/App.jsx`.
- Link / NavLink: Em `MainLayout.jsx` e `BookCard.jsx`.
- useNavigate: Em `Home.jsx` e `LivroDetalhe.jsx`.
- useParams: Em `LivroDetalhe.jsx`.
- Layout com Outlet: Em `MainLayout.jsx`.

### Componentização e Hooks
- Lógica bem separada: Componentes dedicados.
- Busca funcionando: Em `Catalogo.jsx` com `SearchBar`.
- Hook customizado funcionando: `useLocalStorage.js`.
- Contadores atualizados: `Counters.jsx`.

### UX
- Mensagens: Carregando (Loading), Erro (ErrorMessage), Nenhum livro encontrado (em Catalogo.jsx).
- Foco automático correto: Em `SearchBar.jsx`.
- Voltar funcionando: Em `LivroDetalhe.jsx`.

### Organização do código
- Estrutura clara: Pastas bem definidas conforme recomendado.

## 9. Resultado Esperado

O projeto é uma SPA completa, responsiva e bem organizada, atendendo a todos os requisitos: tela inicial, catálogo filtrável, página individual de livro, navegação declarativa/programática, URLs dinâmicas e layout compartilhado.
