import { randomUUIDv7 } from "bun";
import firebase from "../../config/firebase.config";
import { InsertUser, UpdateUser, User } from "./users.schema";
import { UserMapper } from "./user.entity";

export class UsersRepository {
  private readonly collection = "users";

  async create(user: InsertUser): Promise<User> {
    const id = randomUUIDv7();

    const now = new Date();

    const data: User = {
      id,
      name: user.name,
      email: user.email,
      createdAt: now,
      updatedAt: now,
    };

    await firebase.firestore.collection(this.collection).doc(id).set(data);

    return data;
  }

  async retrieve(): Promise<User[]> {
    const snapshot = await firebase.firestore
      .collection(this.collection)
      .orderBy("name", "asc")
      .get();

    const data = snapshot.docs.map((doc) => UserMapper.fromModel(doc.data()));

    return data;
  }

  async retrieveById(id: string): Promise<User | null> {
    const doc = await firebase.firestore
      .collection(this.collection)
      .doc(id)
      .get();

    if (!doc.exists) {
      return null;
    }

    const docData = doc.data();

    const data = UserMapper.fromModel(docData!);

    return data;
  }

  async update(id: string, data: UpdateUser) {
    await firebase.firestore
      .collection(this.collection)
      .doc(id)
      .update({ ...data, updatedAt: new Date() });
  }

  async delete(id: string): Promise<void> {
    await firebase.firestore.collection(this.collection).doc(id).delete();
  }
}
