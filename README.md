# 📚 Guided Study: React Router

Estudo dirigido sobre **Single Page Applications (SPA)** e **React Router** utilizando React e Tailwind CSS.

---

## 📖 Fundamentação Teórica

### O que é uma Single Page Application (SPA)?

Uma **Single Page Application** é uma aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo conforme o usuário navega. Diferente de aplicações tradicionais (Multi Page Applications - MPA), onde cada navegação resulta em uma nova requisição ao servidor e carregamento completo de uma nova página, na SPA toda a lógica de navegação acontece no **lado do cliente (client-side)**.

#### Como funciona?

1. O navegador faz **uma única requisição** ao servidor e recebe o HTML, CSS e JavaScript da aplicação.
2. Quando o usuário clica em um link, o JavaScript **intercepta a navegação** e atualiza apenas o conteúdo necessário na tela.
3. A URL do navegador é atualizada (usando a History API), mas **nenhuma nova requisição de página** é feita ao servidor.
4. O resultado: transições rápidas e fluidas, similar a um aplicativo nativo.

#### SPA vs MPA

| Característica | SPA | MPA |
|---|---|---|
| Carregamento inicial | Mais lento (carrega tudo de uma vez) | Mais rápido (carrega só a página atual) |
| Navegação subsequente | Instantânea | Recarrega a página inteira |
| Experiência do usuário | Fluida, sem piscar | Pode parecer mais lenta |
| SEO | Requer configuração extra | Naturalmente indexável |
| Complexidade | Precisa de roteamento client-side | Roteamento no servidor |

### O que é React Router?

**React Router** é a biblioteca mais popular para gerenciamento de rotas em aplicações React. Ela permite:

- Mapear URLs a componentes específicos
- Navegar entre páginas sem recarregar o navegador
- Passar parâmetros pela URL (ex: `/post/3`)
- Navegação programática (ex: botão Voltar)

#### Conceitos principais

| Conceito | Descrição |
|---|---|
| `BrowserRouter` | Componente que envolve a aplicação e habilita o roteamento |
| `Routes` | Container que agrupa as definições de rotas |
| `Route` | Define o mapeamento entre um caminho (path) e um componente |
| `Link` | Componente para navegação (substitui a tag `<a>`) |
| `useParams` | Hook para acessar parâmetros da URL (ex: `:id`) |
| `useNavigate` | Hook para navegação programática |

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Setup inicial

1. **Clone este repositório** para sua máquina:

```bash
git clone <url-do-seu-fork> react-blog
cd react-blog
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

4. Acesse `http://localhost:5173` no navegador.

---

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis (já prontos!)
│   ├── Header.jsx     # Cabeçalho do blog
│   ├── Footer.jsx     # Rodapé do blog
│   ├── Button.jsx     # Botão reutilizável
│   ├── PostList.jsx   # Lista de posts
│   └── PostItem.jsx   # Card individual de um post
├── data/
│   └── posts.js       # Dados mock dos posts do blog
├── pages/             # 📌 Você vai criar os arquivos aqui!
├── App.jsx            # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos (Tailwind)
```

### Componentes disponíveis

Antes de começar, **analise cada componente** na pasta `src/components/` para entender quais **props** cada um espera receber:

- **`Header`** — Renderiza o cabeçalho/navbar do blog
- **`Footer`** — Renderiza o rodapé
- **`Button`** — Botão reutilizável com variantes de estilo
- **`PostList`** — Recebe uma lista de posts e renderiza cards
- **`PostItem`** — Card individual de um post

> 💡 **Dica:** Leia o código de cada componente para descobrir as props necessárias!

---

## ✅ Etapa 1: Criando as Páginas

Nesta etapa, você vai criar as páginas do blog utilizando os componentes existentes.

### Tarefas

1. **Crie a pasta `src/pages/`** (se não existir)

2. **Crie `src/pages/Home.jsx`:**
   - Importe e utilize o componente `PostList`
   - Importe os dados de `src/data/posts.js`
   - Inclua o `Header` e `Footer`
   - A lista de posts deve ser exibida na página

3. **Crie `src/pages/Post.jsx`:**
   - Exiba o conteúdo completo de um post (pode ser um post fixo por enquanto, ex: `posts[0]`)
   - Inclua título, conteúdo completo, autor e data
   - Inclua o `Header` e `Footer`
   - Inclua um `Button` para Voltar (por enquanto sem funcionalidade)

4. **Crie `src/pages/About.jsx`:**
   - Página simples com informações sobre o blog
   - Inclua o `Header` e `Footer`
   - Adicione um texto descritivo sobre o projeto

5. **Teste suas páginas** alterando manualmente o `App.jsx` para renderizar cada página:

```jsx
// Troque o componente para testar cada página
import Home from "./pages/Home";
// import Post from "./pages/Post";
// import About from "./pages/About";

function App() {
  return <Home />;
}

export default App;
```

### Validação

Ao fazer push, a GitHub Action **Validação - Etapa 1** irá verificar:
- ✅ Existência de `src/pages/Home.jsx`
- ✅ Existência de `src/pages/Post.jsx`
- ✅ Existência de `src/pages/About.jsx`
- ✅ Build do projeto sem erros

---

## ✅ Etapa 2: Implementando React Router

Agora você vai adicionar navegação real entre as páginas usando React Router.

### Tarefas

1. **Instale o React Router:**

```bash
npm install react-router-dom
```

2. **Configure o roteamento no `App.jsx`:**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

3. **Adicione navegação no `Header`:**
   - Substitua os `<span>` por componentes `<Link>` do React Router
   - Link para Home: `/`
   - Link para About: `/about`

4. **Adicione navegação nos posts:**
   - No `PostList`/`PostItem`, use o `onClick` para navegar para `/post/:id`
   - Você pode usar o hook `useNavigate` ou o componente `Link`

5. **Implemente a página Post com parâmetros:**
   - Use o hook `useParams()` para capturar o `:id` da URL
   - Busque o post correspondente nos dados mock
   - Exiba o conteúdo completo do post

6. **Implemente o botão Voltar:**
   - Use o hook `useNavigate()` para voltar à página anterior
   - Exemplo: `navigate(-1)` ou `navigate("/")`

### Validação

Ao fazer push, a GitHub Action **Validação - Etapa 2** irá verificar:
- ✅ `react-router-dom` no `package.json`
- ✅ Uso de `BrowserRouter` no código
- ✅ Uso de `Route` no código
- ✅ Uso de `useParams` no código
- ✅ Build do projeto sem erros

---

## 🏆 Desafio Extra: Página 404

Crie uma página para rotas não encontradas:

1. Crie `src/pages/NotFound.jsx` com uma mensagem amigável
2. Adicione uma rota catch-all no `App.jsx`:

```jsx
<Route path="*" element={<NotFound />} />
```

3. Adicione um botão para voltar à Home

---

## 🎨 Storybook — Visualizando os Componentes

### O que é o Storybook?

O **Storybook** é uma ferramenta de desenvolvimento que permite visualizar, testar e documentar componentes de UI de forma **isolada**, sem precisar rodar a aplicação inteira. Cada componente é exibido em um ambiente independente chamado **story**, onde você pode:

- Ver como o componente renderiza com diferentes props
- Interagir com o componente (clicar botões, alterar valores)
- Testar variações de estado (ex: botão primário vs secundário)
- Entender quais props cada componente aceita

### Como rodar o Storybook

```bash
npm run storybook
```

Acesse `http://localhost:6006` no navegador. Você verá um painel lateral com todos os componentes disponíveis:

| Componente | O que você vai ver |
|---|---|
| **Button** | Botão com variantes `primary` e `secondary` |
| **Header** | Cabeçalho do blog com título customizável |
| **Footer** | Rodapé com texto configurável |
| **PostItem** | Card individual de um post com título, resumo, autor e data |
| **PostList** | Lista completa de posts renderizados em cards |

### Como funciona?

Cada componente possui um arquivo `.stories.jsx` na pasta `src/components/`. Esse arquivo define as **stories** (variações) do componente. Por exemplo:

```jsx
// Button.stories.jsx
export const Primary = {
  args: {
    children: "Clique aqui",
    variant: "primary",
  },
};
```

> 💡 **Dica:** Use o painel **Controls** no Storybook para alterar as props em tempo real e ver como o componente se comporta!

---

## 📚 Recursos Adicionais

- [Documentação oficial do React Router](https://reactrouter.com/)
- [Documentação do React](https://react.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Vite - Getting Started](https://vite.dev/guide/)

---

## 🌿 Branch de Referência

Se precisar consultar a solução completa, confira a branch `solution`:

```bash
git checkout solution
```

> ⚠️ **Importante:** Tente resolver por conta própria antes de consultar a solução!
