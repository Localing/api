import OrderService from '../../services/order.service';

export class OrderController {
    byId(req, res) {
        OrderService.byId(req.params.orderId).then((result) => {
            if (result) res.json(result);
            else res.status(404).end();
        });
    }

    byBusinessId(req, res) {
        OrderService.byBusinessId(req.params.businessId).then((result) => {
            if (result) res.json(result);
            else res.status(404).end();
        });
    }

    byConsumerId(req, res) {
        OrderService.byConsumerId(req.params.consumerId).then((result) => {
            if (result) res.json(result);
            else res.status(404).end();
        });
    }

    verify(req, res) {
        OrderService.verify(req.params.verificationCode).then((result) => {
            res.json(result);
        })
            .catch((error) => {
                res.status(400).json(error);
            })
    }

    redeem(req, res) {
        OrderService.redeem(req.body.verificationCode).then((result) => {
            res.json(result);
        })
            .catch((error) => {
                res.status(400).json(error);
            })
    }

}

export default new OrderController();