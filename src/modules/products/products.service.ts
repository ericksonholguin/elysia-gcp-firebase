import { InsertProduct, UpdateProduct } from "./products.schema";
import { ProductsRepository } from "./products.repository";

export class ProductsService {
  private readonly productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  async retrieve() {
    const [productsFound, totalCount] = await Promise.all([
      this.productsRepository.retrieve(),
      this.productsRepository.count(),
    ]);

    return {
      message: "Products retrieved successfully",
      data: productsFound,
      metadata: {
        currentPage: 1,
        pageSize: 10,
        totalPages: 1,
        totalCount,
      },
      error: null,
    };
  }

  async retrieveById(id: string) {
    const productFound = await this.productsRepository.retrieveById(id);
    return {
      message: "Product retrieved successfully",
      data: productFound,
      error: null,
    };
  }

  async create(product: InsertProduct) {
    const productCreated = await this.productsRepository.create(product);

    return {
      message: "Product created successfully",
      data: { id: productCreated.id },
      error: null,
    };
  }

  async update(id: string, product: UpdateProduct) {
    await this.productsRepository.update(id, product);

    return {
      message: "Product updated successfully",
      data: {
        id,
      },
      error: null,
    };
  }

  async delete(id: string) {
    await this.productsRepository.delete(id);

    return {
      message: "Product deleted successfully",
      data: null,
      error: null,
    };
  }
}
