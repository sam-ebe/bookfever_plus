import React from 'react';
import Home from "./../pages/home";
import About from "./../pages/about";
import { Switch, Route } from 'react-router-dom';

function Main() {

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
];

const pages = routes.map(({ path, name, Component }, index) => {
    return (
      <Route key={name} path={path} component={Component} exact>
      </Route>
    );
  });

  return (
    <main>
      <Switch>
        {pages}
      </Switch>
    </main>
  )
}

export default Main;
