import l from '../../common/logger';
import axios from 'axios';
import ProductService from "./product.service";
var _ = require('lodash');

class CheckoutService {

    constructor() {
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

    async checkoutCart(cart, user) {
        // accepts a cart from the consumer app and returns a stripe token
        l.info(`${this.constructor.name}.checkoutCart()`);

        // get product details from product service for each item in the cart
        let updatedCart = await Promise.all(cart.map(async (item) => {
            let product = await ProductService.byId(item.businessId, item.productId);
            return {
                businessId: product.businessId,
                productId: product.productId,
                quantity: item.quantity,
                price: product.price - (product.price * (product.discount / 100)),
                currency: product.currency,
                name: product.name,
                description: product.description
            }
        })
        );

        // group items in the cart by businessId
        let itemsByBusiness = _.mapValues(_.groupBy(updatedCart, 'businessId'), clist => clist.map(item => _.omit(item, 'businessId')));

        // format the cart for checkout service
        let vendorCarts = [];

        for (const [businessId, vendorItems] of Object.entries(itemsByBusiness)) {
            vendorCarts.push({
                "businessId": businessId,
                "vendorItems": vendorItems
            })
        }

        // add the customer's ID to the cart
        let cartToSubmit = {
            consumerID: user.sub,
            vendorCarts: vendorCarts
        }

        // submit the cart to the checkout service and get a stripe token back
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