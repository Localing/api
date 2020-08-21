import l from '../../common/logger';
import axios from 'axios';

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

    async checkoutCart(cart) {
        l.info(`${this.constructor.name}.checkoutCart()`);
        try {
            let response = await this.api.post(`/checkout`, cart)
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default new CheckoutService();