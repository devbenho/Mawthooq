import type { BubbleProps } from './features/bubble';

export const defaultBotProps: BubbleProps = {
  chatflowid: '',
  apiHost: undefined,
  onRequest: undefined,
  chatflowConfig: undefined,
  theme: {
    chatWindow: {
      textInput: {
        sendButtonColor: 'var(--color-brand-dark, #3B81F6)',
      },
    },
  },
  observersConfig: undefined,
};
