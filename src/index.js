import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/button/SandBox'
import ButtonGroupSandbox from './components/button-group/SandBox'
import IconSandBox from './components/icon/SandBox'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/button" component={ButtonSandbox} />
        <Route path="/button-group" component={ButtonGroupSandbox} />
        <Route path="/icon" component={IconSandBox} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
