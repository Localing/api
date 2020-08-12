import * as express from 'express';
import businessController from './business.controller';

export default express
    .Router()
    .post('/', businessController.create)
    .get('/', businessController.all)
    .get('/:id', businessController.byId)
    .put('/:id', businessController.update)
    .delete('/:id', businessController.delete)