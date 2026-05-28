import admin from "firebase-admin";

const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export default { firestore: admin.firestore(app) };
