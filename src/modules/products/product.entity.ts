import { Product } from "./products.schema";

export class ProductMapper {
  static fromModel(data: FirebaseFirestore.DocumentData): Product {
    return {
      id: data?.id,
      name: data?.name,
      description: data?.description,
      price: data?.price,
      stock: data?.stock,
      minStock: data?.minStock,
      unit: data?.unit,
      status: data?.status,
      createdAt: data?.createdAt.toDate(),
      updatedAt: data?.updatedAt.toDate(),
    };
  }
}
