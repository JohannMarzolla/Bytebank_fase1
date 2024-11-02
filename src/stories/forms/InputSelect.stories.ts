import type { Meta, StoryObj } from "@storybook/react";

import InputSelect, { InputSelectOption } from "@/components/forms/InputSelect";

const meta = {
  title: "Forms/Input Select",
  component: InputSelect,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: InputSelectOption[] = [
  { value: "", label: "Selecione o Tipo" },
  { value: "transferencia", label: "Transferência" },
  { value: "deposito", label: "Depósito" },
];

export const Ligth: Story = {
  args: {
    label: "Tipo transação",
    name: "exemplo",
    style: "ligth",
    options,
  },
};

export const Dark: Story = {
  args: {
    label: "Tipo transação",
    name: "exemplo",
    style: "dark",
    options,
  },
};

export const ComErro: Story = {
  args: {
    label: "Tipo transação",
    name: "exemplo",
    error: "Campo obrigatório",
    options,
  },
};
