import type { Meta, StoryObj } from "@storybook/react";

import InputLabel from "@/components/forms/InputLabel";

const meta = {
  title: "Forms/Input Label",
  component: InputLabel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  args: {
    text: "Exemplo",
    textBold: true,
  },
};
