import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import STYLE from './constants/style';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${STYLE.BODY_COLOR};
  }
`;

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
