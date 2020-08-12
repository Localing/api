import BusinessService from '../../services/business.service';

export class Controller {
  all(req, res) {
    BusinessService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    BusinessService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    BusinessService.create(req.body).then((r) =>
      res.status(201).location(`/api/v1/business/${r.id}`).json(r)
    );
  }

  update(req, res){
    BusinessService.update(req.params.id, req.body).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
  }

  delete(req, res){
    BusinessService.delete(req.params.id).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
  }
}
export default new Controller();