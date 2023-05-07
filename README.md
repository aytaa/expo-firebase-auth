# Developing Authentication Feature using Expo and Firebase Auth


## Description

This page is used for new users to register by providing their basic information to create an account.

## Step 1:

Go to the Firebase console and create a new project. Enable Firebase Authentication feature and select the necessary authentication methods (e.g., email/password, Google, Facebook, etc.).

- Username (required)
- Email Address (required)
- Password (required)
- Confirm Password (required)
- Name (required)
- Surname (required)

At the bottom of the form, there is a "Register" button. Clicking this button will submit the form data to the server and create a new account.

## Step 2: Create Expo Project

Create a new Expo project using the Expo CLI tool. To use Firebase in your Expo project, you need to install Firebase SDK.


```bash
 npm install --save firebase
```

## Step 3: Integrate Firebase Authentication

After including Firebase SDK in your project, you can integrate authentication functionality into your project using Firebase Authentication APIs. You can use Firebase SDK's documentation examples for this.

## Step 4: Create Authentication Screen in Expo Project

After completing Firebase authentication integration, you can create an authentication screen in your Expo project. This screen may contain a form that allows users to sign in or sign up.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
 

