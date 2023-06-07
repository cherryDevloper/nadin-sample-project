import React from 'react';
describe('Weather Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays weather data for selected city', () => {
    // Select a city from the autocomplete
    cy.get('input[role="combobox"]').type('New York');
    cy.contains('New York').click();

    // Check if the selected city is displayed
    cy.contains('New York').should('be.visible');

    // Check if the weather data is loaded
    cy.contains('°C').should('be.visible');

    // Check if the loading spinner is hidden
    cy.get('[data-testid="spin"]').should('not.exist');
  });

  it('Displays error alert when weather data fetching fails', () => {
    // Mock the weather service to return an error
    cy.intercept('GET', '/api/weather/*', {
      statusCode: 500,
      body: 'Internal Server Error',
    });

    // Select a city from the autocomplete
    cy.get('input[role="combobox"]').type('New York');
    cy.contains('New York').click();

    // Check if the error alert is displayed
    cy.contains('Error fetching weather data').should('be.visible');
  });

  it('Displays form validation error for empty city selection', () => {
    // Submit the form without selecting a city
    cy.get('button[type="button"]').click();

    // Check if the form validation error is displayed
    cy.contains('Please select a city').should('be.visible');
  });
});
