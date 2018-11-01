import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Dados from './components/dados/dados.js'
import Home from './components/home/home.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
<BrowserRouter>
<Switch>
   <Route path="/" exact={true} component={Home} />
   <Route path="/dados" component={Dados} />
   <Route path="/home" component={Home} />
</Switch>
</BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
