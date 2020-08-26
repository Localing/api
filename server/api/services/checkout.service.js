import l from '../../common/logger';
import axios from 'axios';
import ProductService from "./product.service";
var _ = require('lodash');

class CheckoutService {

    constructor(env) {
        this.api = axios.create({
            baseURL: process.env.CHECKOUT_API,
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.API_KEY
            }
        });
    }

    async checkoutCart(cart, consumerID) {
        l.info(`${this.constructor.name}.checkoutCart()`);

        let updatedCart = await Promise.all(cart.map(async (item) => {
            let product = await ProductService.byId(item.businessId, item.productId);
            return {
                businessId: product.businessId,
                productId: product.productId,
                quantity: item.quantity,
                price: product.price,
                currency: product.currency,
                name: product.name,
                description: product.description
            }
        })
        );

        // group items by businessId
        let itemsByBusiness = _.mapValues(_.groupBy(updatedCart, 'businessId'), clist => clist.map(item => _.omit(item, 'businessId')));

        // format cart for checkout API
        let vendorCarts = [];

        for (const [businessId, vendorItems] of Object.entries(itemsByBusiness)) {
            vendorCarts.push({
                "businessId": businessId,
                "vendorItems": vendorItems
            })
        }

        let cartToSubmit = {
            consumerID: '12345',
            vendorCarts: vendorCarts
        }

        console.log(cartToSubmit);

        try {
            let response = await this.api.post(`/checkout`, cartToSubmit)
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new CheckoutService();