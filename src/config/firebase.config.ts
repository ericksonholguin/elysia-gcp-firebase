import admin from "firebase-admin";

const app = admin.initializeApp({
  projectId: "elysia-gcp-firebase",
  credential: admin.credential.applicationDefault(),
});

export default { firestore: admin.firestore(app) };
