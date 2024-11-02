import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/components/forms/Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ligth: Story = {
  args: {
    type: "number",
    label: "Exemplo",
    name: "exemplo",
    style: "ligth",
  },
};

export const Dark: Story = {
  args: {
    type: "number",
    label: "Exemplo",
    name: "exemplo",
    style: "dark",
  },
};

export const ComErro: Story = {
  args: {
    type: "number",
    label: "Exemplo",
    name: "exemplo",
    error: "Campo obrigatório",
  },
};

export const Data: Story = {
  args: {
    type: "date",
    label: "Data",
    name: "exemplo",
  },
};
