import React from 'react';
import Sidebar from './index';

describe('<Sidebar />', () => {
  it('renders', () => {
    cy.mount(<Sidebar />);
  });
});
