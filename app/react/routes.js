import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { Main, Blog, About } from "./components"

export const Routes = (
   <Router history={browserHistory}>
      <Route path='/' component={Main}>
         <IndexRoute component={Blog}/>
         <Route path="about" component={About}/>
         <Route path="renju" component={About}/>
      </Route>
   </Router>
)