#!/bin/bash

# Check to see if Brew is installed, and install it if it is not

which brew
if [[ $? != 0 ]] ; then
    echo "Brew is not installed, installing..."
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    echo "Now we are just updating..."
    brew update
else
    echo "Brew is already installed, just doing the update..."
    brew update
fi

# Check to see if Npm is installed, and install it if it is not

which npm
if [[ $? != 0 ]] ; then
    echo "Npm is not installed, installing..."
    brew install npm
else
    echo "Npm is already installed, just doing the update..."
    npm update
fi

# Check to see if Java 8 is installed, and install it if it is not

which java
if [[ $? != 0 ]] ; then
    echo "Java is not installed, installing..."
    brew tap caskroom/versions
    brew cask install java8

else
    if [[ "java" ]]; then
        version=$("java" -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d. -f1-2)
        echo version "$version"
        if [[ "$version" == "1.8" ]]; then
            echo "Correct version already installed"
        else
            brew tap caskroom/versions
            brew cask install java8
            echo "Installing the correct version"
        fi
    fi
    echo "Java is already installed, just doing the update..."
fi


# Check to see if Maven is installed, and install it if it is not

which mvn
if [[ $? != 0 ]] ; then
    echo "Maven is not installed, installing..."
    brew install maven
else
    echo "Maven is already installed, skipping..."
fi

# Check to see if Appium is installed, and install it if it is not

which appium
if [[ $? != 0 ]] ; then
    echo "Appium is not installed, installing..."
    npm install -g appium@v1.15.0
    npm install -g appium-doctor
else
    echo "Checking if the right version is installed."
    appium -v | grep 1.15.0
    if [[ $? != 0 ]] ; then
        echo "Version is wrong. Removing old one and installing the correct."
        npm uninstall -g appium
        npm install -g appium@v1.15.0
        else
        echo "Correct version already installed, skipping..."
    fi
fi

# Check to see if Brew is installed, and install it if it is not

which carthage
if [[ $? != 0 ]] ; then
    echo "Carthage is not installed, installing..."
    brew install carthage
else
    echo "Carthage is already installed, skipping..."
fi

# Check to see if ios-deploy is installed, and install it if it is not

which ios-deploy
if [[ $? != 0 ]] ; then
    echo "iOS-deploy is not installed, installing..."
    npm install -g ios-deploy
else
    echo "iOS-deploy is already installed, skipping..."
fi

# Check to see if idb-companion is installed, and install it if it is not

which idb-companion
if [[ $? != 0 ]] ; then
    echo "idb-companion is not installed, installing..."
    brew tap facebook/fb
    brew install idb-companion
else
    echo "idb-companion is already installed, skipping..."
fi

# Check to see if python3 is installed, and install it if it is not

which python3
if [[ $? != 0 ]] ; then
    echo "Python3 is not installed, installing..."
    brew install python3
else
    echo "Python3 and idb is already installed, skipping..."
fi

# Check to see if idb is installed, and install it if it is not

which idb
if [[ $? != 0 ]] ; then
    echo "idb is not installed, installing..."
    pip3 install fb-idb
else
    echo "idb is already installed, skipping..."
fi