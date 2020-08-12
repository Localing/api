import ConsumerService from '../../services/consumer.service';

export class Controller {
  all(req, res) {
    ConsumerService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    ConsumerService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req, res) {
    ConsumerService.create(req.body).then((r) =>
      res.status(201).location(`/api/v1/consumer/${r.id}`).json(r)
    );
  }

  update(req, res){
    ConsumerService.update(req.params.id, req.body).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
  }

  delete(req, res){
    ConsumerService.delete(req.params.id).then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
  }
}
export default new Controller();