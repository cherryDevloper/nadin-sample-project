import React from 'react';
describe('CustomModal Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays the modal and handles form submission', () => {
    // Open the modal
    cy.get('button').click();

    // Check if the modal is visible
    cy.get('[role="dialog"]').should('be.visible');

    // Fill in the form
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check if the modal is closed
    cy.get('[role="dialog"]').should('not.exist');

    // Check if the form values are cleared
    cy.get('input[name="firstName"]').should('have.value', '');
    cy.get('input[name="lastName"]').should('have.value', '');
  });

  it('Displays form validation errors', () => {
    // Open the modal
    cy.get('button').click();

    // Submit the form without filling in any values
    cy.get('button[type="submit"]').click();

    // Check if the form validation errors are displayed
    cy.contains('First name is required').should('be.visible');
    cy.contains('Last name is required').should('be.visible');

    // Fill in the form
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check if the form validation errors are cleared
    cy.contains('First name is required').should('not.exist');
    cy.contains('Last name is required').should('not.exist');
  });
});
