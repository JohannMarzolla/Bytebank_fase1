import type { Meta, StoryObj } from "@storybook/react";

import Icon from "@/components/ui/Icon";

const meta = {
  title: "UI/Icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    name: "edit",
  },
};
