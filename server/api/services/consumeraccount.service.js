import l from '../../common/logger';
import axios from 'axios';

class ConsumerAccountService {

    constructor(env) {
        this.api = axios.create({
            baseURL: process.env.CONSUMER_API,
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.API_KEY
            }
        });
    }

    async all() {
        l.info(`${this.constructor.name}.all()`);
        try {
            let response = await this.api.get('/consumer')
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async byId(consumerId) {
        l.info(`${this.constructor.name}.byId(${consumerId})`);
        try {
            let response = await this.api.get(`/consumer/${consumerId}`)
            return response.data;
        } catch (error) {
            return error;
        }
    }

}

export default new ConsumerAccountService();