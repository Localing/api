import BusinessAccountService from '../../services/businessaccount.service';

export class BusinessAccountController {
  all(req, res) {
    BusinessAccountService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    BusinessAccountService.byId(req.params.businessId).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

}
export default new BusinessAccountController();