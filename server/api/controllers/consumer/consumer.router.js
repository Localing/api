import * as express from 'express';
import consumerController from './consumer.controller';

export default express
    .Router()
    .post('/', consumerController.create)
    .get('/', consumerController.all)
    .get('/:id', consumerController.byId)
    .put('/:id', consumerController.update)
    .delete('/:id', consumerController.delete)