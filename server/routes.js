import businessAccountRouter from './api/controllers/businessaccount/businessaccount.router';
import consumerAccountRouter from './api/controllers/consumeraccount/consumeraccount.router';
import businessRouter from './api/controllers/business/business.router';
import productRouter from './api/controllers/product/product.router';
import checkoutRouter from './api/controllers/checkout/checkout.router';
import orderRouter from './api/controllers/order/order.router';
import imageRouter from './api/controllers/image/image.router';

export default function routes(app) {
  app.use('/api/v1/businessaccount', businessAccountRouter);
  app.use('/api/v1/consumeraccount', consumerAccountRouter);
  app.use('/api/v1/business', businessRouter);
  app.use('/api/v1/product', productRouter);
  app.use('/api/v1/checkout', checkoutRouter);
  app.use('/api/v1/order', orderRouter);
  app.use('/api/v1/image', imageRouter);
}
