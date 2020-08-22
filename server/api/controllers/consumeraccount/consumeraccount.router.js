import * as express from 'express';
import consumerAccountController from './consumeraccount.controller';

export default express
    .Router()
    .get('/:consumerId', consumerAccountController.byId)