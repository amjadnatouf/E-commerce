# Project Title

### E-commerce

# Authors

- Amjad Natouf: Front-End developer

## Folders and File Manifest

- src Main code folder - All necessary classes contained here.
  - index.js: Represents a react app entry point.
  - App.js: Represents a react app entry point has to be loaded into an html element with id root and it contains the routes.
  - App.css: Represents a react app styling entry point.
  - views: Represents react app pages which are one to one map of the router routes.
  - store: React app store folder contains global store that are getting used across product.
    - actions.js: Actions are the only source of information for the store. It carries a payload of information from your application to store.
    - reducers.js: Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words,
      (state, action) => newState.
    - actionstypes.js: Represents the type of actions that can be applied inside the reducers.
    - index.js: Represents the entry point for the store.
  - server folder: It contains the file that connect the end point for backend graphql with react app.
  - components folder: Represents the app components that can be used inside the app.

### Building, Running, and Usage

### `npm install`

install all needed dependencies to start the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Testing

- This app has been tested on various environments using the responsive viewer extension, and it is responsive.
- In addition to testing in the browser as much as possible and using Redux devtools, I have tested the app on different environments, as well
- Since automated testing isn't required by the requirement, no automated test has been run
