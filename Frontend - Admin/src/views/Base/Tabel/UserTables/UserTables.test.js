import React from 'react';
import ReactDOM from 'react-dom';
import UserTables from './UserTables';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserTables />, div);
  ReactDOM.unmountComponentAtNode(div);
});
