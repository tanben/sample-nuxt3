
# LaunchDarkly Nuxt3 Sample Application

This sample Nuxt3 app demonstrates the integration of LaunchDarkly Vue and NodeJS SDKs. It showcases how to use feature flags to control the behavior and appearance of your application. 

## Demo

![Demo Overview](./doc/img/nuxtdemooverview.jpg)
The app is built using the Nuxt3 starter script. For more information, refer to the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).
## Features

- Integration with LaunchDarkly Vue and NodeJS SDKs
- Usage of feature flags to control frontend and backend functionality
- Easy setup and configuration using environment variables

## Prerequisites

Before running the application, ensure you have the following:

- [LaunchDarkly Account](https://launchdarkly.com/start-trial/)
- [LaunchDarkly SDK key and Client Side ID](https://docs.launchdarkly.com/sdk/concepts/client-side-server-side?q=sdk%20key)
- NodeJS >= 16.x
- [Nuxt3](https://nuxt.com/docs/getting-started/introduction)

## Getting Started

Follow these steps to set up and run the application:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/launchdarkly-nuxt3-sample.git
   cd launchdarkly-nuxt3-sample
   ```

2. Install the dependencies:

   ```bash
   # Using yarn
   yarn install

   # Using npm
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```
   CLIENT_SIDE_ID=<LaunchDarkly client side ID>
   SERVER_SIDE_SDK_KEY=<LaunchDarkly SDK key>
   ```

   Replace `<LaunchDarkly client side ID>` and `<LaunchDarkly SDK key>` with your actual LaunchDarkly client-side ID and SDK key.

4. Create the following feature flags in your LaunchDarkly project:

   - `frontend-toggle`
   - `backend-toggle`

5. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Production Build

To build the application for production, run the following command:

```bash
npm run build
```

To preview the production build locally, use:

```bash
npm run preview
```

For more information on deploying your Nuxt3 application, refer to the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

#