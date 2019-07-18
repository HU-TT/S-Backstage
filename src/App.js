import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/";
import Aside from "./Components/Aside/";
import routes from "./Router/"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="main">
          <Aside />
          <Redirect path='/' to='/home' />
          {routes.map((item, index) => {
            if (item.exact) {
              return (<Route path={item.path} render={props => (<item.component {...props} />)} key={index} exact />)
            } else {
              return (<Route path={item.path} render={props => (<item.component {...props} />)} key={index} />)
            }
          })}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
