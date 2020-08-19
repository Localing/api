import BusinessService from '../../services/business.service';

export class BusinessController {
  all(req, res) {
    BusinessService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    BusinessService.byId(req.params.businessId).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

}
export default new BusinessController();