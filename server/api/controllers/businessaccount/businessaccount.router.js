import * as express from 'express';
import businessAccountController from './businessaccount.controller';
import authorizer from '../../middlewares/authorizer';

export default express
    .Router()
    .get('/:businessId', authorizer.verifyBusiness, businessAccountController.byId)