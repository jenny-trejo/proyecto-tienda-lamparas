const firebaseConfig = {
  apiKey: "AIzaSyDq96DmifjGKblR_p2fEmFDlch8Boq9Ta4",
  authDomain: "proyecto-tienda-lamparas.firebaseapp.com",
  projectId: "proyecto-tienda-lamparas",
  storageBucket: "proyecto-tienda-lamparas.firebasestorage.app",
  messagingSenderId: "272544835885",
  appId: "1:272544835885:web:2d87c382dbf8f665800ba4"
};
// Inicializar
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
