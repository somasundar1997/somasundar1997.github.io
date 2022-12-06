import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';

import App from './Layout/App';

ReactDOM.render(
  <FluentProvider theme={teamsDarkTheme}>
    <App />
  </FluentProvider>,
  document.getElementById('root'),
);