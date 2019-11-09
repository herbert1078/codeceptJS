const { I } = inject();
// Add in your custom step files

Given('Eu Escrevo meu Email', () => {
  I.wait(3);
  I.fillField({android: 'Email address', ios: '~login_username'}, 'qaninja@gmail.com');
});
