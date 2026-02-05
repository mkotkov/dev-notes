---
title: "React Native: start the project"
date: 2026-02-04
category: "Base"
tags: [base, expo, mobile, app, start, frameworks, react_native]
summary: "How start the project with React Native using Expo."
draft: false 
---
## Links
- Download Node.js: [https://nodejs.org/](https://nodejs.org/)

## Prerequisites

Make sure you have installed:

- Node.js (v18+ recommended)

- npm or yarn

- Expo CLI


## Environment check

Before start the project, make sure all required tools are installed.

### Check Node.js

```
node -v
```
Recommended: v18+

If not installed:
[https://nodejs.org/](https://nodejs.org/)


### Check npm

```
npm -v
```
(npm is included with Node.js)

### Check Expo CLI

```
expo --version
```
If Expo CLI is not installed, install it globally:

```
npm install -g expo-cli
```
Alternatively, you can use Expo without global install via npx (recommended).

## Create Expo project
Navigate to the project folder and while being in the root folder of the project, run:
```
npx create-expo-app .
```
### Check the structure
Once created, you should see the following:

```
flowtime/
├─ app.json
├─ package.json      ✅
├─ App.tsx / App.js
├─ node_modules/
```

## Running the project
Start the Expo development server:
```
npx expo start
```
Then choose how to run the app:

- Expo Go — scan the QR code with the Expo Go app

- Android Emulator

- iOS Simulator (macOS only)

- Web (optional)

## Project structure (optional, but nice)
```
/app        – screens and routing
/components – reusable UI components
/assets     – fonts, icons, images
```

## Useful scripts
Start Expo:
```
npm start  
```
Run on Android:
```
npm run android
``` 
Run on iOS (macOS):
```
npm run ios
```
Run in browser:
```
npm run web
```