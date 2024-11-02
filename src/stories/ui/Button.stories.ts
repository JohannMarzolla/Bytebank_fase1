import Button from "@/components/ui/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    color: "orange",
    outlined: true,
    text: "Botão",
  },
};

export const Disabled: Story = {
  args: {
    color: "orange",
    disabled: true,
    text: "Botão",
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
    text: "Botão",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    text: "Botão",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    text: "Botão",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    text: "Botão",
  },
};

export const Black: Story = {
  args: {
    color: "black",
    text: "Botão",
  },
};

export const Gray: Story = {
  args: {
    color: "gray",
    text: "Botão",
  },
};
