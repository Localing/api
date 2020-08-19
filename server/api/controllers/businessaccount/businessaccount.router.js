import * as express from 'express';
import businessAccountController from './businessaccount.controller';

export default express
    .Router()
    .get('/', businessAccountController.all)
    .get('/:businessId', businessAccountController.byId)