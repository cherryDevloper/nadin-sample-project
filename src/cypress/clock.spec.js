import { cy } from 'cypress';

describe('Clock Component', () => {
  it('Displays the current time', () => {
    cy.visit('/'); // Assuming the component is rendered at the root route

    cy.get('div[data-testid="clock"]').should('exist'); // Ensure the clock component is rendered

    cy.get('div[data-testid="clock"]').should('contain', '00:00:00'); // Initially, the time should be 00:00:00

    cy.wait(1000); // Wait for 1 second

    cy.get('div[data-testid="clock"]').should('not.contain', '00:00:00'); // The time should have updated

    // You can add more assertions as needed to test different scenarios
  });
});
