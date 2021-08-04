const { v4: uuidv4 } = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: 'user-images-4bff4dc4-4dc4-40a2-b814-3c8c3ee9745d',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer
  };

  return imageParams;
};


module.exports = params;