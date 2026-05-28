import Elysia from "elysia";

import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./users.dtos";

const UserModule = new Elysia({ prefix: "/users" });

UserModule.group("", (app) => {
  const usersService = new UsersService();

  return app
    .get("/", () => usersService.retrieve())
    .get("/:id", ({ params }) => usersService.retrieveById(params.id))
    .post("/", ({ body }) => usersService.create(body), {
      body: CreateUserDto,
    })
    .put("/:id", ({ params, body }) => usersService.update(params.id, body), {
      body: UpdateUserDto,
    })
    .delete("/:id", ({ params }) => usersService.delete(params.id));
});

export { UserModule };
