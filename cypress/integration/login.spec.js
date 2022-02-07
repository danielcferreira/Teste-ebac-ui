/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () => {

        cy.visit('lojaebac.ebaconline.art.br/minha-conta/')
       
        cy.get('#username').type('aluno_ebac@teste.com')

        cy.get('#password').type('teste@teste.com')

        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac (não é aluno_ebac? Sair)')

    })

    it('deve exibir uma mensagem de erro ao inserir usuario  invalido',() =>{
       
        cy.visit('lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ebAc@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')

    })

    it.only('deve exibir uma mensagem de erro ao inserir senha invalida',() =>{
       
        cy.visit('lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })


})