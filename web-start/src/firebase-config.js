/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBHdnHK9mpy8gLGz7Sj3NzhYZGi9uIUdx4",
  authDomain: "friendlychat-2f8e8.firebaseapp.com",
  projectId: "friendlychat-2f8e8",
  storageBucket: "friendlychat-2f8e8.appspot.com",
  messagingSenderId: "167928985930",
  appId: "1:167928985930:web:e2b7ddb262c9d5603ce9b3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}