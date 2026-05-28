import { t } from "elysia";

export const CreateUserDto = t.Object({
  name: t.String(),
  email: t.String(),
});

export const UpdateUserDto = t.Object({
  name: t.Optional(t.String()),
  email: t.Optional(t.String()),
});
