# Lamda PUT

This Lambda function puts a person to a database

## Live deployment
- [Deployed API](https://yjmx6t39sk.execute-api.us-west-2.amazonaws.com/Completed/people)

## Description
Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

## Database: DynamoDB
1 Table required.

## Routing: API Gateway
- POST
  - /people - Given a JSON body, inserts a record into the database.
  - returns an object representing one record, by its id (##).
- GET
  - /people - returns an array of objects representing the records in the database.
  - /people/## - returns an object representing one record, by its id (##).
- PUT
  - /people/## - Given a JSON body and an ID (##), updates a record in the database.
  - returns an object representing one record, by its id (##).
- DELETE
  - /people/## - Given an id (##) removes the matching record from the database.
  - returns an empty object.

## CRUD Operation Handlers: Lambda Functions

## UML
[whiteboard](https://projects.invisionapp.com/freehand/document/ymzXIrXeC)
