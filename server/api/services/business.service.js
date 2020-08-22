import l from '../../common/logger';
import axios from 'axios';

class BusinessService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.BUSINESS_API,
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
            let response = await this.api.get('/business')
            // filter out inactive businesses
            let result = response.data.filter(business => business.active);
            return result;
        } catch (error) {
            return error;
        }
    }

    async byId(businessId) {
        l.info(`${this.constructor.name}.byId(${businessId})`);
        try {
            let response = await this.api.get(`/business/${businessId}`)
            return response.data;
        } catch (error) {
            return error;
        }
    }
}

export default new BusinessService();