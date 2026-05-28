import { User } from "./users.schema";

export class UserMapper {
  static fromModel(data: FirebaseFirestore.DocumentData): User {
    return {
      id: data?.id,
      name: data?.id,
      email: data?.email,
      createdAt: data?.createdAt.toDate(),
      updatedAt: data?.updatedAt.toDate(),
    };
  }
}
