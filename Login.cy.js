/// <referance types="cypress"/>

describe('Login Feature',() => {
    it('User Login with valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait("@actionSummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('InvalidUser');
        cy.get('[name="password"]').type('wrongpassword');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.url().should('include', '/auth/login');
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('InvalidUser');
        cy.get('[name="password"]').type('admin123');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.url().should('include','/auth/login');
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials')
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('wrongpassword');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.url().should('include','/auth/login');
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials')
    })
    it('User Login with valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').clear();
        cy.get('[name="password"]').clear();
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.url().should('include','/auth/login');
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired')
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').clear();
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.url().should('include','/auth/login');
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').clear();
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.url().should('include','/auth/login');
    })
    it('User attempts to recover password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').contains('Forgot your password?').click();     
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password');
    })
})