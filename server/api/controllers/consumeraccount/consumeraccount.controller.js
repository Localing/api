import ConsumerAccountService from '../../services/consumeraccount.service';

export class ConsumerAccountController {
  all(req, res) {
    ConsumerAccountService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    ConsumerAccountService.byId(req.params.consumerId).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }
}
export default new ConsumerAccountController();