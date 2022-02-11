/// <reference types="cypress"/> 

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
   
  beforeEach(() => {
     cy.visit('minha-conta')
     cy.fixture('perfil').then(dado => {
        cy.login(dado.usuario, dado.senha)
     })
    
  })
  //hook


    it('Deve fazer cadastro de faturamentos com sucesso ', () => {
       


        
    });
});