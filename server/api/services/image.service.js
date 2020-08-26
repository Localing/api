import l from '../../common/logger';
const AWS = require('aws-sdk');

class ImageService {

    async upload(base64, productId) {
        l.info(`${this.constructor.name}.upload(${productId})`);
        
        const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_AWS_REGION, S3_BUCKET } = process.env;
      
        AWS.config.setPromisesDependency(require('bluebird'));
        AWS.config.update({ accessKeyId: S3_ACCESS_KEY_ID, secretAccessKey: S3_SECRET_ACCESS_KEY, region: S3_AWS_REGION });
      
        // Create an s3 instance
        const s3 = new AWS.S3();
        const base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        const type = base64.split(';')[0].split('/')[1];
      
        const params = {
          Bucket: S3_BUCKET,
          Key: `${productId}.${type}`,
          Body: base64Data,
          ACL: 'public-read',
          ContentEncoding: 'base64',
          ContentType: `image/${type}`
        }
      
        let location = '';
        let key = '';

        try {
          const { Location, Key } = await s3.upload(params).promise();
          location = Location;
          key = Key;
        } catch (error) {
           return error;
        }
        
        return { "imageURL": location, "fileName": key };
      }

}

export default new ImageService();