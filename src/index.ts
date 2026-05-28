import { Elysia } from "elysia";

import { UserModule } from "./modules/users/users.module";

const app = new Elysia({ prefix: "/api" });

app.use(UserModule);

app.listen(process.env.PORT || 8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${process.env.PORT}`,
);
