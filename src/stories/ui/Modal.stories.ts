import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/ui/Modal";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controla se o modal está aberto ou não",
    },
    children: {
      control: "text",
      description: "Conteúdo exibido dentro do modal",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "Este é o conteúdo do modal", 
  },
};
