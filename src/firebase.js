// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP5MvjdTqFLjUmCwR4KKCVrW-nSKz5plc",
  authDomain: "meta-house-syndicate.firebaseapp.com",
  projectId: "meta-house-syndicate",
  storageBucket: "meta-house-syndicate.appspot.com",
  messagingSenderId: "964972529309",
  appId: "1:964972529309:web:02a37bab2cf547f46f3674",
  measurementId: "G-CH96C4CZ4S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lf8CyQeAAAAAObGyUrMlACfoTIpzN4tuHqoOgBx'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});


export const analytics = getAnalytics(app);
export const storage = getStorage(app);

export async function stall(stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}