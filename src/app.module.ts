import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PostsModule, UsersModule, ProductsModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { }
