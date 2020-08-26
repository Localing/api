import ImageService from '../../services/image.service';

export class ImageController {
  upload(req, res) {
    ImageService.upload(req.body.imageData, req.body.productId).then((r) => res.json(r));
  }

}
export default new ImageController();