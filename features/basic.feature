Feature: Login

  @Login1
  Scenario: Login com usuario e senha
    Given Digito o meu Email
    And Digito a minha senha
    Then Eu clico no botão Login

  @Login2
  Scenario: Cadastro
    Given Que eu clico no botao de cadastrar
