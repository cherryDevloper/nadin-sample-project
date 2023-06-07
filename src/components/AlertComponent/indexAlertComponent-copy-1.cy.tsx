import React from 'react';
import AlertComponent from './index';
import { mount } from 'cypress/react18';
describe('AlertComponent', () => {
  it('Displays the alert message with the specified type', () => {
    const message = 'This is a test alert message';
    const type = 'success';

    mount(<AlertComponent type={type} message={message} showAlert={true} />);

    cy.contains('.MuiAlert-message', message).should('exist');
  });

  it('Hides the alert after a specified time', () => {
    const message = 'This is a test alert message';
    const hideAfter = 2000;

    mount(
      <AlertComponent
        type="info"
        message={message}
        showAlert={true}
        hideAfter={hideAfter}
      />,
    );

    cy.contains('.MuiAlert-message', message).should('exist');
    cy.wait(hideAfter + 3000); // Wait for the hideAfter time + extra 1 second
    cy.contains('.MuiAlert-message', message).should('not.exist');
  });
});
