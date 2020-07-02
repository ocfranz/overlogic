# Overlogic

Overlogic is an AR mobile learning app.
## Installation

Follow the installation guide below to set up and run this source code locally on Windows using Android real devices (Mac/Linux and iOS devices coming soon).


### Prerequisites
* Have installed Node js. If not, you can do it [here](https://nodejs.org/en/download/current/).

* Android Studio for the Android SDK and tools, make sure you have downloaded and installed Android Studio from here to get required SDK and platform-tools for building android apps. Also make sure you have the required environment variables set - $ANDROID_HOME, and added platform-tools to $PATH variable. If not,
```bash
export ANDROID_HOME=/YOUR_PATH_TO/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
```
### Clone Repo
```bash
git clone https://github.com/ocfranz/overlogic.git
cd overlogic
```
### Install and setup dependencies
```bash
npm install
```
### Running and Debugging the app
#### Android
1. To build, install and launch the android app, from the root of the project 
```bash
npx react-native run-android --variant=gvrDebug
```
2. To enable live reload, run and select Enable Live Reload on android app
```bash
npx adb shell input keyevent 82
```

## Project Structure

```bash
├── src
│   ├── assets
│   │  ├── fonts
│   │  ├── images
│   ├── components
│   │  ├── Button
│   │  ├── Link
│   ├── navigations
│   ├── screens
│   │  ├── Login
│   │  ├── Home
│   ├── styles
│   ├── services
│   ├── utils
```
