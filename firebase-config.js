/* ============================================================
   HSIA Protocol Registry – Firebase settings
   ------------------------------------------------------------
   1. Replace everything inside FIREBASE_CONFIG with the
      "firebaseConfig" values shown in the Firebase console
      (Project settings → General → Your apps → SDK setup and
      configuration → Config).
   2. The two e-mail addresses below must be exactly the same as
      the two users you create under Authentication → Users, and
      the same as in firestore.rules.
   These values are not secret. The passwords and the security
   rules are what protect the data.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAZFTWgNjFOaodKXu2i-EGZq9YUn47VERM",
  authDomain: "aho-protocols.firebaseapp.com",
  projectId: "aho-protocols",
  storageBucket: "aho-protocols.firebasestorage.app",
  messagingSenderId: "243772111504",
  appId: "1:243772111504:web:77c285692a6e5667be7615"
};

window.HSIA_ACCOUNTS = {
  doctor: "doctor@hsia-protocol.app",   // Chief Airport Health Officer and doctors: full access
  si: "si@hsia-protocol.app"            // Sanitary Inspectors: view only
};
