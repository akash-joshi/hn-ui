# HN-UI
![Node.js CI](https://github.com/akash-joshi/accessible-hn/workflows/Node.js%20CI/badge.svg)

A project to learn the best practises about web-development and accessibility by building a HN clone in create-react-app with SSR.

## Heroku Link:

https://a11y-hn.herokuapp.com/

## a11y Demo (Click on Image to go to Video):

[![Video Thumbnail](https://i.postimg.cc/J73R37sf/Screenshot-2020-07-30-at-3-44-09-PM.png)](https://www.youtube.com/watch?v=InaNfygnBXw&feature=youtu.be)

## Performance, Accessibility, PWA Report

![Reports](https://i.postimg.cc/NF8G5BXw/Screenshot-2020-07-30-at-3-41-11-PM.png)

## CI/Tests

![Tests Screenshot](https://i.postimg.cc/XvTpjXBK/Screenshot-2020-08-13-at-1-48-49-PM.png)

## About the Tech Stack:

### 1. Linting and Prettifying Code:
An opinionated eslint and prettier config is used to ensure high code quality.

### 2. Pre-commit Hooks:
Husky is used to ensure obviously broken code is never pushed.

### 3. Server-side Rendering:
If you check the `server/` folder, you will find the code which is used for SSR. Babel and react-dom/server are used to build the initial webpage on server-side before sending it to the client.

### 4. Github Actions for CI:
Github Actions is used to lint, build and test each commit to ensure nothing is broken.

### 5. Abstracting Data Layer:
The complete data layer has been abstracted into the `data.js` file.

### 6. Component Abstraction with lazy-loading:
Each component gets its own file with its own CSS-in-JS. They are also loaded in lazily to avoid large bundle size.

### 7. Testing using react-testing-library:
Tests have been added to check API calls and rendering of each component.

### 8. Responsive and PWA-ready

## Design Considerations:

1. Header text is made black instead of white for higher a11y score.
2. Graph is allowed to hide some elements to allow ID readability, might be replaced in the future.
3. The webapp has been optimized for: Screens wider than 1000px, an 11-inch iPad, a 6-inch smartphone.
4. The graph is affecting performance by >20 points, so efforts have been made to mitigate it by hiding it under a details tag + using lazy-loading.

## CRA Boilerplate from here:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
