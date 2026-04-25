
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDq96DmifjGKblR_p2fEmFDlch8Boq9Ta4",
  authDomain: "proyecto-tienda-lamparas.firebaseapp.com",
  projectId: "proyecto-tienda-lamparas",
  storageBucket: "proyecto-tienda-lamparas.firebasestorage.app",
  messagingSenderId: "272544835885",
  appId: "1:272544835885:web:2d87c382dbf8f665800ba4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);