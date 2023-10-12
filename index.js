'use strict';

const dynamoose = require('dynamoose');

// define our schema
const peopleSchema = new dynamoose.Schema({
  'id': Number,
  'name': String,
  'email': String,
});

// create our Model
let personModel = dynamoose.model('cf-lambda-crud', peopleSchema);

exports.handler = async (event) => {
  console.log('crudDELETE 1.0');
  console.log('HERE IS THE EVENT OBJECT', event);

  const id = event.pathParameters.id; // Extracting ID from pathParameters

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify('ID required to delete person'),
    };
  }

  try {
    // Delete the record with the specified ID
    await personModel.delete({ id: id });
  } catch (error) {
    console.log('ERROR: ', error);
    return {
      statusCode: 400,
      body: JSON.stringify('Could not delete person'),
    };
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({}), // Returning an empty object as specified
  };
  return response;
};
