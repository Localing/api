import axios from 'axios';
import l from '../../common/logger';

class OrderService {

    constructor(env) {
        this.api = axios.create({
            baseURL: process.env.ORDER_DEV_API,
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.DEV_API_KEY
            }
        });
    }

    async byId(orderId) {
        l.info(`${this.constructor.name}.byId(${orderId})`);
        try {
            let response = await this.api.get(`/orderData.json`);
            let result = response.data.filter(order => order.orderId === orderId);
            return result;
        } catch (error) {
            return error;
        }
    }

    async byBusinessId(businessId) {
        l.info(`${this.constructor.name}.byBusinessId(${businessId})`);
        try {
            let response = await this.api.get(`/orderData.json`);
            let result = response.data.filter(order => order.businessId === businessId);
            return result;
        } catch (error) {
            return error;
        }
    }

    async byConsumerId(consumerId) {
        l.info(`${this.constructor.name}.byConsumerId(${consumerId})`);
        try {
            let response = await this.api.get(`/orderData.json`);
            let result = response.data.filter(order => order.consumerId === consumerId);
            return result;
        } catch (error) {
            return error;
        }
    }

    async verify(verificationCode) {
        l.info(`${this.constructor.name}.verify(${verificationCode})`);
        try {
            let response = await this.api.get(`/orderData.json`);
            let result = response.data.filter(order => order.verificationCode === verificationCode);
            return result;
        } catch (error) {
            return error;
        }
    }

    async redeem(verificationCode) {
        l.info(`${this.constructor.name}.redeem(${verificationCode})`);
        try {
            let response = await this.api.get(`/orderData.json`);
            let result = response.data.filter(order => order.verificationCode === verificationCode);
            return result;
        } catch (error) {
            return error;
        }
    }

}

export default new OrderService();