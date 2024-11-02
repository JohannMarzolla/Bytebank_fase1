import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "@/components/ui/IconButton";

const meta = {
  title: "UI/Icon Button",
  component: IconButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    icon: "edit",
  },
};
