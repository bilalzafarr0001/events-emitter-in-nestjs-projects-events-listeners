import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductCreatedEvent } from './events/product-created.event';

@Injectable()
export class ProductsService {
  public products: Product[] = [
    {
      id: 1,
      name: 'Order #1',
      price: '10',
    },
    {
      id: 2,
      name: 'Order #2',
      price: '20',
    },
  ];

  constructor(private eventEmitter: EventEmitter2) {}

  create(createProductDto: CreateProductDto) {
    const product = {
      id: this.products.length + 1,
      ...createProductDto,
    };
    this.products.push(product);

    const productCreatedEvent = new ProductCreatedEvent();
    productCreatedEvent.name = product.name;
    productCreatedEvent.price = product.price;
    this.eventEmitter.emit('product.created', productCreatedEvent);

    return product;
  }
}
