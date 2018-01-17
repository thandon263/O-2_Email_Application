# Application setup for the Client

### Standard Setup

* index.js

  * We have Redux dealing with the State of the Application

* App.js

  * We will use react-router to control the routing in the client.

---

## Redux setup

* Redux Store

- CombineReducers
  * authReducer - Records whether or not the user is logged in
  * surveyReducer - Records a list of all surveys user has created

### The Main index.js file

```JavaScript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Main App component
import App from "./components/App";

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
