import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import { ProductService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product | null> {
    return this.productService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto): Promise<Product | null> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Product | null> {
    return this.productService.remove(id);
  }
}
