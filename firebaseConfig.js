import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8bf53jpE5wjBMqF2P8J2CnCpHml0-gqE",
  authDomain: "imel0n-test-app.firebaseapp.com",
  projectId: "imel0n-test-app",
  storageBucket: "imel0n-test-app.firebasestorage.app",
  messagingSenderId: "923354231879",
  appId: "1:923354231879:web:a0ffbffd028718ed6eed62"
};

const app = initializeApp(firebaseConfig);

export default app;