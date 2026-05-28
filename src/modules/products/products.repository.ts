import { randomUUIDv7 } from "bun";
import firebase from "../../config/firebase.config";
import { InsertProduct, UpdateProduct, Product } from "./products.schema";
import { ProductMapper } from "./product.entity";

export class ProductsRepository {
  private readonly collection = "products";

  async create(product: InsertProduct): Promise<Product> {
    const id = randomUUIDv7();

    const now = new Date();

    const data: Product = {
      id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      minStock: product.minStock,
      unit: product.unit,
      status: product.status,
      createdAt: now,
      updatedAt: now,
    };

    await firebase.firestore.collection(this.collection).doc(id).set(data);

    return data;
  }

  async retrieve(): Promise<Product[]> {
    const snapshot = await firebase.firestore
      .collection(this.collection)
      .orderBy("name", "asc")
      .get();

    const data = snapshot.docs.map((doc) =>
      ProductMapper.fromModel(doc.data()),
    );

    return data;
  }

  async retrieveById(id: string): Promise<Product | null> {
    const doc = await firebase.firestore
      .collection(this.collection)
      .doc(id)
      .get();

    if (!doc.exists) {
      return null;
    }

    const docData = doc.data();

    const data = ProductMapper.fromModel(docData!);

    return data;
  }

  async update(id: string, data: UpdateProduct) {
    await firebase.firestore
      .collection(this.collection)
      .doc(id)
      .update({ ...data, updatedAt: new Date() });
  }

  async delete(id: string): Promise<void> {
    await firebase.firestore.collection(this.collection).doc(id).delete();
  }

  async count(): Promise<number> {
    const snapshot = await firebase.firestore.collection(this.collection).get();

    return snapshot.size;
  }
}
