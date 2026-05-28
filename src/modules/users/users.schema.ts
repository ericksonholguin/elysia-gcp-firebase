import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;
export type InsertUser = Omit<User, "id" | "createdAt" | "updatedAt">;
export type UpdateUser = Partial<InsertUser>;
