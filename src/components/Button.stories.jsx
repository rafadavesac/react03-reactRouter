import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    onClick: { action: "clicked" },
  },
};

export const Primary = {
  args: {
    children: "Clique aqui",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Voltar",
    variant: "secondary",
  },
};
