const posts = [
  {
    id: 1,
    title: "Introdução ao React",
    summary: "Aprenda os conceitos fundamentais do React e como criar seus primeiros componentes.",
    content: "React é uma biblioteca JavaScript para construção de interfaces de usuário. Criada pelo Facebook, ela permite criar componentes reutilizáveis que gerenciam seu próprio estado. O React utiliza um Virtual DOM para otimizar atualizações na interface, tornando as aplicações mais rápidas e eficientes. Neste post, vamos explorar os conceitos básicos como JSX, componentes, props e estado.",
    author: "Maria Silva",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Hooks do React: useState e useEffect",
    summary: "Entenda como os hooks revolucionaram o desenvolvimento com React.",
    content: "Os Hooks foram introduzidos no React 16.8 e mudaram completamente a forma como escrevemos componentes. O useState permite adicionar estado a componentes funcionais, enquanto o useEffect lida com efeitos colaterais como chamadas a APIs, timers e manipulação do DOM. Juntos, eles eliminam a necessidade de classes na maioria dos casos.",
    author: "João Santos",
    date: "2024-02-20",
  },
  {
    id: 3,
    title: "Estilização com Tailwind CSS",
    summary: "Descubra como o Tailwind CSS pode acelerar seu fluxo de trabalho.",
    content: "Tailwind CSS é um framework CSS utility-first que permite estilizar elementos diretamente no HTML usando classes utilitárias. Diferente de frameworks como Bootstrap, o Tailwind não impõe um design específico — ele fornece blocos de construção de baixo nível que permitem criar designs totalmente personalizados sem sair do HTML.",
    author: "Ana Oliveira",
    date: "2024-03-10",
  },
  {
    id: 4,
    title: "Single Page Applications (SPA)",
    summary: "O que são SPAs e por que elas dominam o desenvolvimento web moderno.",
    content: "Single Page Applications são aplicações web que carregam uma única página HTML e atualizam dinamicamente o conteúdo conforme o usuário interage. Ao invés de fazer requisições ao servidor para cada nova página, a SPA intercepta a navegação e renderiza o conteúdo no lado do cliente. Isso resulta em uma experiência mais fluida e rápida para o usuário.",
    author: "Carlos Ferreira",
    date: "2024-04-05",
  },
  {
    id: 5,
    title: "Navegação com React Router",
    summary: "Aprenda a implementar rotas e navegação em aplicações React.",
    content: "React Router é a biblioteca mais popular para gerenciamento de rotas em aplicações React. Ela permite criar navegação entre diferentes views sem recarregar a página, mantendo a URL sincronizada com o conteúdo exibido. Com React Router, podemos definir rotas, passar parâmetros pela URL, criar redirecionamentos e muito mais.",
    author: "Maria Silva",
    date: "2024-05-12",
  },
];

export default posts;
