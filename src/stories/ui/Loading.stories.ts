import type { Meta, StoryObj } from "@storybook/react";
import Loading from "@/components/ui/Loading";

const meta = {
  title: "Components/Loading", 
  component: Loading, 
  parameters: {
    layout: 'centered', 
  },
  tags: ["autodocs"], 
  argTypes: {}, 
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  }, 
};
