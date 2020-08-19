import * as express from 'express';
import businessController from './business.controller';

export default express
    .Router()
    .get('/', businessController.all)
    .get('/:businessId', businessController.byId)