'use strict';

const { handler } = require('./index.js');

const test = {}

describe('Testing the crudPost lambda', () => {
  it('Should return a list of people', async () => {
    let response = await handler(test);

    expect(response.statusCode).toEqual(200);
    // console.log(response.body)
    // console.log('response:',  responseBody)
    // expect(responseBody[0].name).toBeTruthy();
  });
});