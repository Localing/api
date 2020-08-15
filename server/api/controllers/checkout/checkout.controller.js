import CheckoutService from '../../services/checkout.service';

export class CheckoutController {
    checkoutCart(req, res) {
        CheckoutService.checkoutCart(req.body).then((result) =>
          res.json(result)
        );
      }
  }
  export default new CheckoutController();