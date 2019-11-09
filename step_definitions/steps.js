const { I } = inject();

Given('Digito o meu Email', () => {
  I.wait(3);
  I.fillField({android: 'Email address', ios: '~login_username'}, 'qaninja@gmail.com');
});

Given('Digito a minha senha', () => {
  I.wait(3);
  I.fillField({android: 'Password', ios: '~password_input'}, '1234567');
});

Then('Eu clico no botão Login', () => {
  I.runOnAndroid(() => {
    I.tap('CONTINUE');
});
I.runOnIOS(() => {
    I.tap('~login_button');
});
});

Given('Que eu clico no botao de cadastrar', () => {
  I.wait(3);
  I.runOnAndroid(() => {
      I.tap('SIGN UP');
  });
  I.runOnIOS(() => {
      I.tap('~btn_sign_up_login');
  });
});