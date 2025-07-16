# How to Integrate with Agents

This document provides instructions on how to integrate and use the agents.

## 1. Install Dependencies

If you haven't installed the dependencies yet, run the following command:

```bash
yarn install
```

## 2. Integrate in `public/index.html`

To integrate and test the agent locally, follow these steps:

1.  **Start the Development Server:**
    In a new terminal, run:
    ```bash
    yarn dev
    ```
    This will serve the test page on `http://localhost:5678`.

2.  **Configure `public/index.html`:**
    Open `public/index.html` and update the `Chatbot.init` configuration to use one of your agent identifiers from the `.env` file.

    ```html
    <!-- public/index.html -->
    <script type="module">
      import Chatbot from './web.js';
      Chatbot.init({
        chatflowid: 'your-identifier-here', // Must match an identifier from your .env
        apiHost: 'http://localhost:3001',
      });
    </script>
    ```

3.  **Test the Agent:**
    Navigate to `http://localhost:5678` in your browser. The chatbot should be visible and functional.
