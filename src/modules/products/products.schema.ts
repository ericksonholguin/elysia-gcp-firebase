import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number().int(),
  minStock: z.number().int(),
  unit: z.string(),
  status: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Product = z.infer<typeof ProductSchema>;
export type InsertProduct = Omit<Product, "id" | "createdAt" | "updatedAt">;
export type UpdateProduct = Partial<InsertProduct>;
