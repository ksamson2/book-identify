# IMY 772 workshop projects

- The two projects chosen were the chatbot and identifying celebrities. I built my application using AWS amplify ( I naturally needed to grab credentials from an AWS user to set this up). Following this, I initialized an amplify project. 

### Identify celebrities

The `identify celebrities` page identifies celebrities from an image the user uploads. This was built by adding the `Predictions` library to the project. 
The resource I used to help set this up was the amplify docs:  https://docs.amplify.aws/lib/predictions/identify-entity/q/platform/js/

### Chatbot

The `chatbot` page integrates a chatbot with my application. This was built using the default AWS bot: Order Flowers that I modified a little. I created this bot via the Amplify CLI by adding the interactions library. 
This is the resource I used to set this up: https://docs.amplify.aws/ui/interactions/chatbot/q/framework/react/

### General notes 

The identify-celebrities project is accessible at this URL:https://main.d2ehp8qfo8weri.amplifyapp.com/

Link to the video: https://drive.google.com/file/d/12BiZx_1fPK2MLtpk05VuWnFENKAnjrsA/view?usp=sharing

**Important commands: **
* `amplify init`
* `amplify add auth` -> used to add authentication for the project
* `amplify add predictions` -> used to add the Predictions library which provides Amplify's wrapper library for AWS Rekognition
* `amplify add interactions` -> used to add the interactions library which is Amplify's wrapper for AWS Lex
* `amplify update interactions` -> Used to create a new slot and sample utterance 
* The identify celebrities project will clear labels between uploading photos, so you don't see stale data when a new image is being tested

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing

- clone the repo and then
  In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
