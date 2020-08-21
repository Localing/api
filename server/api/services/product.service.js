import l from '../../common/logger';
import axios from 'axios';

class ProductService {

    constructor(env) {
        this.api = axios.create({
            baseURL: process.env.PRODUCT_DEV_API,
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.DEV_API_KEY
            }
        });
    }

    async all(businessId) {
        l.info(`${this.constructor.name}.all(${businessId})`);
        try {
            let response = await this.api.get(`/business/${businessId}/product`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async byId(businessId, productId) {
        l.info(`${this.constructor.name}.byId(${businessId}, ${productId})`);
        try {
            let response = await this.api.get(`/business/${businessId}/product/${productId}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async create(businessId, body) {
        l.info(`${this.constructor.name}.create()`);
        try {
            let response = await this.api.post(`/business/${businessId}/product`, body);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async update(businessId, productId, body) {
        l.info(`${this.constructor.name}.update(${businessId}, ${productId})`);
        try {
            let response = await this.api.put(`/business/${businessId}/product/${productId}`, body);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async delete(businessId, productId) {
        l.info(`${this.constructor.name}.delete(${businessId}, ${productId})`);
        try {
            let response = await this.api.delete(`/business/${businessId}/product/${productId}`);
            return response.data
        } catch (error) {
            return error;
        }
    }
}

export default new ProductService();