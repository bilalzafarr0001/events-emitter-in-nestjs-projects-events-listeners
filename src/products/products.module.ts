import { Module } from '@nestjs/common';
import { ProductCreatedListener } from './listeners/product-created.listener';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductCreatedListener],
})
export class ProductsModule {}
