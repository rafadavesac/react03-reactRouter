import PostList from "./PostList";

export default {
  title: "Components/PostList",
  component: PostList,
  argTypes: {
    onPostClick: { action: "post clicked" },
  },
};

export const Default = {
  args: {
    posts: [
      {
        id: 1,
        title: "Introdução ao React",
        summary: "Aprenda os conceitos fundamentais do React.",
        author: "Maria Silva",
        date: "2024-01-15",
      },
      {
        id: 2,
        title: "Hooks do React",
        summary: "Entenda como os hooks revolucionaram o React.",
        author: "João Santos",
        date: "2024-02-20",
      },
      {
        id: 3,
        title: "Estilização com Tailwind CSS",
        summary: "Descubra como o Tailwind acelera seu fluxo de trabalho.",
        author: "Ana Oliveira",
        date: "2024-03-10",
      },
    ],
  },
};

export const SinglePost = {
  args: {
    posts: [
      {
        id: 1,
        title: "Single Page Applications",
        summary: "O que são SPAs e por que elas dominam o desenvolvimento web moderno.",
        author: "Carlos Ferreira",
        date: "2024-04-05",
      },
    ],
  },
};
