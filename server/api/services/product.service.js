import l from '../../common/logger';
import axios from 'axios';
import { response } from 'express';

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


    async all() {
        l.info(`${this.constructor.name}.all()`);
        try {
            let response = await this.api.get('/product')
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async byId(id) {
        l.info(`${this.constructor.name}.byId(${id})`);
        try {
            let response = await this.api.get(`/product/${id}`)
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async create(body) {
        l.info(`${this.constructor.name}.create()`);
        // TBD
    }

    async update(id, body) {
        l.info(`${this.constructor.name}.update(${sub})`);
        // TBD
    }

    async delete(id) {
        l.info(`${this.constructor.name}.delete(${sub})`);
        // TBD
    }
}

export default new ProductService();