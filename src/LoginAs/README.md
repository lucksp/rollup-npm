# LoginAs

This package will act as a React Provider:

- connect to authentication API for user validation,
- handle the Auth0 connection,
- check user for permissioned accounts,
- update local storage,
- and return a context hook to continue the login process dispatches such as setting accouns to global state

## Tech details:

- Typescript + React
- Transpiles to ES5
- Parcel for budling the development code and running development server for browser and express http-proxy-middleware for backend proxy.

## For Development:

To connect to the backend a simple proxy must be setup to connect with the NGINX server. That is the `dev-server.js` file. It is included as part of the overall development command below.

- Install deps: `npm install`
- Start development server through Parcel: `npm dev`. Please run the full proxy URL in the browser: [http://localhost:5050/](http://localhost:5050/)
- Test: `npm run test`
- To Bundle to ES5 with watch mode: `npm run build:watch`
- The SANDBOX should never be exported as part of the bundle.

## To Export package:

- The root of the project will handle bundling all features

## To use package:

- Wrap your App or required components in the `LoginProvider` like:

```
<LoginProvider loginCreds={credentials} currentApp={getYourAppNameHere}>
    <OtherComponentsOrApp />
</LoginProvider>
```

- The Provider requires `credential` and `currentApp` props.
- The Context returns values of `userName, userDetails, error` which can be used to update local app state or dispatch results to a global reducer. To access the context, use the hook: `const { userName, userDetails, error } = useLoginContext();`.
- The Provider allows for it to handle its own error response, with the `handleError: boolean;` prop. It is turned off by default.
