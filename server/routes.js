import businessRouter from './api/controllers/business/business.router';
import productRouter from './api/controllers/product/product.router';

export default function routes(app) {
  app.use('/api/v1/business', businessRouter);
  app.use('/api/v1/product', productRouter);
}
