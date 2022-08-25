import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductUpdateInput } from 'src/@generated/product/product-update.input';
import { ProductCreateInput } from '../@generated/product/product-create.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductInput: ProductCreateInput): Promise<Product> {
    return await this.prisma.product.create({
      data: {
        title: createProductInput.title,
        desc: createProductInput.desc,
        price: createProductInput.price,
      },
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProductInput: ProductUpdateInput) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        title: updateProductInput.title,
        desc: updateProductInput.desc,
        price: updateProductInput.price,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({ where: { id } });
  }
}
