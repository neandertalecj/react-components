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
import ImageSandBox from './components/image/SandBox'
import ChipSandBox from  './components/chip/SandBox'
import BadgeSandBox from './components/badge/SandBox'
import ListGroupSandBox from './components/list-group/SandBox'
import InputSandBox from './components/input/SandBox'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/button" component={ButtonSandbox} />
        <Route path="/button-group" component={ButtonGroupSandbox} />
        <Route path="/icon" component={IconSandBox} />
        <Route path="/image" component={ImageSandBox} />
        <Route path="/chip" component={ChipSandBox} />
        <Route path="/badge" component={BadgeSandBox} />
        <Route path="/list-group" component={ListGroupSandBox} />
        <Route path="/input" component={InputSandBox} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
