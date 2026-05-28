import admin, { firestore } from "firebase-admin";

const app = admin.initializeApp({
  credential: admin.credential.cert(
    "src/config/elysia-gcp-firebase-firebase-adminsdk-fbsvc-f6e47386d3.json",
  ),
});

export default { firestore: admin.firestore(app) };
