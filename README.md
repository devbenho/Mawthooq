<!-- markdownlint-disable MD030 -->

## Quick Start

1. Configure environment:

```bash
# Copy .env.example to .env and configure required settings:
API_HOST=https://your-flowise-instance.com
FLOWISE_API_KEY=your-api-key

# Configure your chatflows:
# Format: [identifier]=[chatflowId],[allowedDomain1],[allowedDomain2],...
#
# identifier: Any name you choose (e.g., agent1, support, salesbot)
# chatflowId: The UUID of your Flowise chatflow
# allowedDomains: Comma-separated list of domains where this chat can be embedded
#
# Examples:
support=abc123-def456,https://example.com
agent1=xyz789-uvw456,https://sales.example.com
helpdesk=ghi123-jkl456,https://help.example.com,https://support.example.com
```

2. Install dependencies: (assuming you did not run `yarn install` yet)

```bash
yarn install
```

3. Start proxy server:

```bash
yarn start
# Server will be available at:
# - Local:  http://localhost:3001
# - Cloud:  [Your Platform URL] (e.g., https://your-app.herokuapp.com)
```

4. Once the proxy server is running in production, you will be able to embed your chatbots safely without exposing your Flowise API host and chatflow IDs as below:

```html
<script type="module">
  import Chatbot from 'your-proxy-server-url/web.js'; // Must be 'your-proxy-server-url/web.js'
  Chatbot.init({
    chatflowid: 'your-identifier-here', // Must match an identifier from your .env
    apiHost: 'your-proxy-server-url', // Must match the URL of your proxy server
    chatflowConfig: {
      // ...
    },
  });
</script>
```

5. (optional) If you want to test any identifier in public/index.html, you can update it as below:

```html
<!-- public/index.html -->
chatflowid: 'your-identifier-here' // Must match an identifier from your .env
```

**Important Notes:**

- To ensure secure embedding, you must explicitly whitelist the websites authorized to embed each chatbot. This configuration is done within the .env file. Note that this also applies to your server's URL when deployed to a cloud environment, or http://localhost:3001 for local development, if needed you must whitelist it as well.
- Wildcard domains (\*) are not supported for security reasons
- Identifiers are case-insensitive (e.g., 'Support' and 'support' are treated the same)

## Cloud Deployment Requirements

When deploying to cloud platforms, you must configure the environment variables directly in your platform. The proxy server will not start without these variables being properly set. Compatible with Nixpacks for automatic deployment configuration.

## Development Mode (For Local Testing)

1. Configure your environment variables (see above)

2. Start the proxy server:

```bash
yarn start
# Server will be available at:
# - Local:  http://localhost:3001
```

3. Update the test page configuration:

- Open `public/index.html` in your code editor
- Modify the `chatflowid` and `apiHost` to match your `.env` settings:

```html
<!-- public/index.html -->
<script type="module">
  import Chatbot from './web.js';
  Chatbot.init({
    chatflowid: '<agentId_exposed_from_flowise_instance>', // Must match an identifier from your .env
    apiHost: '<flowise_instance_url>', // Change this from window.location.origin to 'http://localhost:3001'
  });
</script>
```

For full page testing, use this configuration instead:

```html
<!-- public/index.html -->
<flowise-fullchatbot></flowise-fullchatbot>
<script type="module">
  import Chatbot from './web.js';
  Chatbot.initFull({
    chatflowid: `<chatFlowIdExposedFromFlowise>`, // Must match an identifier from your .env
    apiHost: '<FlowiseInstanceURL>', // Change this from window.location.origin to 'http://localhost:3001'
  });
</script>
```

4. While the proxy server is running, open a new terminal and start the development server:

```bash
yarn dev
# This will serve the test page on http://localhost:5678 automatically
```

5. Test the chatbot:

- Navigate to http://localhost:5678
- The chatbot should now be visible and functional

**Note:** The development URL (http://localhost:5678) is automatically added to allowed domains in development mode. You don't need to add it manually.

## License

Source code in this repository is made available under the [MIT License](https://github.com/FlowiseAI/Flowise/blob/master/LICENSE.md).
