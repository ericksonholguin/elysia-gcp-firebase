import { InsertUser, UpdateUser } from "./users.schema";
import { UsersRepository } from "./users.repository";

export class UsersService {
  private readonly usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async retrieve() {
    const usersFound = await this.usersRepository.retrieve();
    return {
      message: "Users retrieved successfully",
      data: usersFound,
      metadata: {
        currentPage: 1,
        pageSize: 10,
        totalPages: 1,
        totalCount: 10,
      },
      error: null,
    };
  }

  async retrieveById(id: string) {
    const userFound = await this.usersRepository.retrieveById(id);
    return {
      message: "User retrieved successfully",
      data: userFound,
      error: null,
    };
  }

  async create(user: InsertUser) {
    const userCreated = await this.usersRepository.create(user);

    return {
      message: "User created successfully",
      data: { id: userCreated.id },
      error: null,
    };
  }

  async update(id: string, user: UpdateUser) {
    await this.usersRepository.update(id, user);

    return {
      message: "User updated successfully",
      data: {
        id,
      },
      error: null,
    };
  }

  async delete(id: string) {
    await this.usersRepository.delete(id);

    return {
      message: "User deleted successfully",
      data: null,
      error: null,
    };
  }
}
