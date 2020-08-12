import ProductService from '../../services/product.service';

export class Controller {
  all(req, res) {
    ProductService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    ProductService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    ProductService.create(req.body).then((r) =>
      res.status(201).location(`/api/v1/product/${r.id}`).json(r)
    );
  }

  update(req, res){
    ProductService.update(req.params.id, req.body).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
  }

  delete(req, res){
    ProductService.delete(req.params.id).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
  }
}
export default new Controller();