import ProductService from '../../services/product.service';

export class ProductController {
  all(req, res) {
    ProductService.all(req.params.businessId).then((r) => res.json(r));
  }

  byId(req, res) {
    ProductService.byId(req.params.businessId, req.params.productId).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    ProductService.create(req.params.businessId, req.body).then((r) =>
      res.status(201).location(`/api/v1/product/${r.id}`).json(r)
    );
  }

  update(req, res) {
    ProductService.update(req.params.businessId, req.params.productId, req.body).then((result) => {
      res.json(result);
    })
      .catch((error) => {
        res.status(400).json(error);
      })
  }

  delete(req, res) {
    ProductService.delete(req.params.businessId, req.params.productId).then((result) => {
      res.json(result);
    })
      .catch((error) => {
        res.status(400).json(error);
      })
  }
}
export default new ProductController();