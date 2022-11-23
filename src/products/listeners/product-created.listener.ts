import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderCreatedEvent } from 'src/orders/events/order-created.event';
import { ProductCreatedEvent } from '../events/product-created.event';

@Injectable()
export class ProductCreatedListener {
  @OnEvent('product.created')
  handleProductCreatedEvent(event: ProductCreatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log('Listen Event', event);
  }

  @OnEvent('order.created')
  handleOrderCreatedEvent(event: OrderCreatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log('Listen Event in products  module ::', event);
  }
}
