// auth.js

import AWS from 'aws-sdk';

// Configure AWS with your access and secret key. 
//const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION } = process.env;

AWS.config.update({
    accessKeyId: 'AKIAZSURJSZTG7YHTJO4',
    secretAccessKey: 'YhWzDMLgN35WqBjeSofNiqGL2dKM0Y4+kBoYSspa',
    region: 'US East (Ohio) us-east-2'
});

// Create an S3 client
const s3 = new AWS.S3();

const uploadToS3 = async (file) => {
  const uploadParams = {
    Bucket: 'solteams', // replace with your actual bucket name
    Key: file.name, // or any unique name
    Body: file,
    ACL: 'public-read', // makes the file publicly accessible
  };

  try {
    const result = await s3.upload(uploadParams).promise();

    console.log('Upload success', result.Location); // logs the URL of the uploaded file
    return result.Location;
  } catch (error) {
    console.log('Upload error', error);
    throw error;
  }
};

export default uploadToS3;
