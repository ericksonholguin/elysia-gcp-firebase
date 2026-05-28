import Elysia from "elysia";

import { ProductsService } from "./products.service";
import { CreateProductDto, UpdateProductDto } from "./products.dtos";

const ProductModule = new Elysia({ prefix: "/products" });

ProductModule.group("", (app) => {
  const productsService = new ProductsService();

  return app
    .get("/", () => productsService.retrieve())
    .get("/:id", ({ params }) => productsService.retrieveById(params.id))
    .post("/", ({ body }) => productsService.create(body), {
      body: CreateProductDto,
    })
    .put("/:id", ({ params, body }) => productsService.update(params.id, body), {
      body: UpdateProductDto,
    })
    .delete("/:id", ({ params }) => productsService.delete(params.id));
});

export { ProductModule };
