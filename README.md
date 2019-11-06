
## 1-) Configure App Location:

Edit the file on **config/local.properties** with your personal configuration.

## 2-) Configure the environment variables:

Add the code below to your ~/.bash_profile (obs: change the $(whoami) for your user)
```
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH/:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home)
#export PATH=${JAVA_HOME}/bin:$PATH
