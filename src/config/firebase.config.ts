import admin, { firestore } from "firebase-admin";

const isProduction = process.env.NODE_ENV === "production";

const app = admin.initializeApp({
  credential: admin.credential.cert(
    isProduction
      ? "./firebase-service-account.json"
      : "src/config/elysia-gcp-firebase-firebase-adminsdk-fbsvc-f6e47386d3.json",
  ),
});

export default { firestore: admin.firestore(app) };
