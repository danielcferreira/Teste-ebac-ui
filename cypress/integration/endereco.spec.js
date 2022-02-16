/// <reference types="cypress"/> 
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco =  require('../fixtures/endereco.json') 

describe('Funcionalidade Endereços - Faturamento e entrega', () => {

   
  beforeEach(() => {
     cy.visit('minha-conta')
     cy.fixture('perfil').then(dado => {
        cy.login(dado.usuario, dado.senha)
     })
    
  })
  //hook


    it('Deve fazer cadastro de faturamentos com sucesso ', () => {
       EnderecoPage.editarEnderecoFaturamento('jorge', 'luiz', 'Correios', 'Brasil', 
       'Riacho fundo 1', '04', 'Distrito Federal', 'Distrito federal', '78965430', '6198745612', 'teste@terminal.com' )
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
      
    });



    it.only('Deve fazer cadastro de faturamentos com sucesso - Usando arquivos de dados', () => {
      EnderecoPage.editarEnderecoFaturamento(
         dadosEndereco[1].nome,
         dadosEndereco[1].sobrenome,
         dadosEndereco[1].empresa,
         dadosEndereco[1].pais,
         dadosEndereco[1].endereco,
         dadosEndereco[1].numero,
         dadosEndereco[1].cidade,
         dadosEndereco[1].estado,
         dadosEndereco[1].cep,
         dadosEndereco[1].telefone,
         dadosEndereco[1].email
         )
      cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    
   });
});