import admin from "firebase-admin";

const isProduction = process.env.NODE_ENV === "production";

const app = admin.initializeApp({
  credential: isProduction
    ? admin.credential.applicationDefault()
    : admin.credential.cert("./service-account-key.json"),
});

export default { firestore: admin.firestore(app) };
