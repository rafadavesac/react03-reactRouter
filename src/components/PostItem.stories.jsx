import PostItem from "./PostItem";

export default {
  title: "Components/PostItem",
  component: PostItem,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const Default = {
  args: {
    title: "Introdução ao React",
    summary: "Aprenda os conceitos fundamentais do React e como criar interfaces modernas.",
    author: "Maria Silva",
    date: "2024-01-15",
  },
};

export const LongSummary = {
  args: {
    title: "Hooks do React: useState e useEffect",
    summary:
      "Entenda como os hooks revolucionaram o desenvolvimento com React, permitindo usar estado e efeitos colaterais em componentes funcionais de forma simples e elegante.",
    author: "João Santos",
    date: "2024-02-20",
  },
};
