import React from 'react';
import Home from "./../pages/home";
import About from "./../pages/about";
import CategoriesResults from './../pages/categoriesResults';
import { Switch, Route } from 'react-router-dom';

function Main(dataBooks) {

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  //{ path: "/categories", name: "Categories", Component: categoriesResults },
];

const pages = routes.map(({ path, name, Component }, index) => {
    return (
      /* render method used instead of component={Component} in order to pass the props */
      <Route key={name} 
             path={path}
             exact
             render={() => (
               <Component {...dataBooks} />
             )}
             >  
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
