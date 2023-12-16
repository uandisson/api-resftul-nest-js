import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({ where: { id } });
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    //findOneOrFail: function returns an exception when the product is not found
    const existingProduct = await this.productRepository.findOneOrFail({ where: { id } });
    if (!existingProduct) {
      return null;
    }

    this.productRepository.merge(existingProduct, updateProductDto);
    return this.productRepository.save(existingProduct);
  }

  async remove(id: number): Promise<Product | null> {
    const existingProduct = await this.productRepository.findOne({ where: { id } });
    if (!existingProduct) {
      return null;
    }

    await this.productRepository.remove(existingProduct);
    return existingProduct;
  }
}
