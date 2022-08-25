import { Injectable } from '@nestjs/common';
import { customers as Customer, PrismaClient } from '@prisma/client';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

const client = new PrismaClient()

@Injectable()
export class CustomerService {
  create(createCustomerInput: CreateCustomerInput) {
    return 'This action adds a new customer';
  }

  async findAll(): Promise<Customer[]> {
    return await client.customers.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
