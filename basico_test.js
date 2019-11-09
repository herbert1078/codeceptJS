Feature ('Login');


Scenario('Login com usuario e senha', (I) => {
    I.wait(3);
    I.fillField({android: 'Email address', ios: '~login_username'}, 'qaninja@gmail.com');
    I.fillField({android: 'Password', ios: '~password_input'}, '1234567');
    I.runOnAndroid(() => {
        I.tap('CONTINUE');
    });
    I.runOnIOS(() => {
        I.tap('~login_button');
    });
});

Feature ('Cadastro');

Scenario('Acessar a tela de cadastro', (I) => {
    I.wait(3);
    I.runOnAndroid(() => {
        I.tap('SIGN UP');
    });
    I.runOnIOS(() => {
        I.tap('~btn_sign_up_login');
    });
});