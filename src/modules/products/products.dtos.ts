import { t } from "elysia";

export const CreateProductDto = t.Object({
  name: t.String(),
  description: t.String(),
  price: t.Number(),
  stock: t.Integer(),
  minStock: t.Integer(),
  unit: t.String(),
  status: t.String(),
});

export const UpdateProductDto = t.Object({
  name: t.Optional(t.String()),
  description: t.Optional(t.String()),
  price: t.Optional(t.Number()),
  stock: t.Optional(t.Integer()),
  minStock: t.Optional(t.Integer()),
  unit: t.Optional(t.String()),
  status: t.Optional(t.String()),
});
