import businessRouter from './api/controllers/business/business.router';
import productRouter from './api/controllers/product/product.router';
import consumerRouter from './api/controllers/consumer/consumer.router';
import checkoutRouter from './api/controllers/checkout/checkout.router';

export default function routes(app) {
  app.use('/api/v1/business', businessRouter);
  app.use('/api/v1/consumer', consumerRouter);
  app.use('/api/v1/product', productRouter);
  app.use('/api/v1/checkout', checkoutRouter);
}
