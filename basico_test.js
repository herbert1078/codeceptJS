
Feature('Login');

Scenario('Login com Usuario e Senha', (I) => {
    I.wait(3);
    I.fillField('Email address','qaninja@io.com.br');
    I.fillField('Password', '123456');
    I.tap('CONTINUE');
});


Feature('Cadastro');

Scenario('Acessar a tela de Cadastro', (I) => {
    I.wait(3);
    I.tap('SIGN UP');
});
