
## 1-) Rodar o Sh com as Dependencias:

Acessar o diretório por terminal e rodar o seguinte comando:
$ sh install_dependencies.sh

## 2-) Configurar seu Bash Profile:

Adicionar isso no seu ~/.bash_profile
```
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH/:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home)
#export PATH=${JAVA_HOME}/bin:$PATH
```

## 3-) Rodar o comando para salvar o bash profile:
Run: `$ source ~/.bash_profile`


Se rodar o appium-doctor e aparecer problema no bin, por favor descomentar a ultima linha do bin e rodar o comando do passo 3 novamente.


## 4-) Json para configurar o Appium Desktop:
 Android: `{
  "app": "/Users/hebertsoares/Documents/QaNinja/CodeceptJS/app-debug.apk",
  "platformName": "android",
  "platformVersion": "9",
  "deviceName": "novo1"
}`

IOS: `{
  "app": "/Users/hebertsoares/Documents/Qa Ninja/CodeceptJS/LoginExample.app",
  "platformName": "iOS",
  "platformVersion": "12.2",
  "deviceName": "iPhone X"
}`

## 5-) Arquivos de configurações de cada Plataforma Sem Gherkin:
Codecept.config.js - Android: https://bit.ly/2UjhWcC
Codecept.config.js - IOS: https://bit.ly/2ScvW5y
