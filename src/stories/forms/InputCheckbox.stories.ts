import type { Meta, StoryObj } from "@storybook/react";

import InputCheckbox from "@/components/forms/InputCheckbox";

const meta = {
  title: "Forms/Input Checkbox",
  component: InputCheckbox,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    label: "A funcionalidade deve estar habilitada?",
    name: "exemplo",
  },
};
