import * as express from 'express';
import imageController from './image.controller';

export default express
    .Router()
    .post('/', imageController.upload)