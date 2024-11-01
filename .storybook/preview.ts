import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Supondo que o Tailwind esteja configurado nesse arquivo

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
