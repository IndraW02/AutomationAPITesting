API Test Automation with Cypress
This repository contains automated tests for the ReqRes.in API using Cypress. The tests cover various HTTP methods (GET, POST, PUT, DELETE) to verify the API's functionality.

Test Cases
1. GET List Users
Description: Tests retrieving a list of users from page 2

Endpoint: GET /api/users?page=2

Verifications:

Status code is 200

Response contains an array of user data

2. GET Single User
Description: Tests retrieving details for a specific user (ID 2)

Endpoint: GET /api/users/2

Verifications:

Status code is 200

Response contains the correct user ID

3. POST Create User
Description: Tests creating a new user

Endpoint: POST /api/users

Request Body:

json
{
  "name": "morpheus",
  "job": "leader"
}
Verifications:

Status code is 201 (Created)

Response contains an ID for the new user

4. PUT Update User
Description: Tests updating an existing user (ID 2)

Endpoint: PUT /api/users/2

Request Body:

json
{
  "name": "morpheus",
  "job": "zion resident"
}
Verifications:

Status code is 200 (OK)

5. DELETE User
Description: Tests deleting a user (ID 2)

Endpoint: DELETE /api/users/2

Verifications:

Status code is 204 (No Content)

Prerequisites
Node.js (v12 or higher)

npm or yarn

Installation
Clone this repository

Install dependencies:

bash
npm install
Running Tests
To run all tests:

bash
npx cypress run
To open the Cypress Test Runner:

bash
npx cypress open
Test Structure
All test files are located in the cypress/e2e/ directory:

GET_ListUsers.cy.js

GET_SingleUser.cy.js

POST_CreateUser.cy.js

PUT_UpdateUser.cy.js

DELETE_User.cy.js

Configuration
The tests use the following configuration:

Base URL: https://reqres.in

API Key: reqres-free-v1 (sent in headers)

CI/CD Integration
These tests can be easily integrated into any CI/CD pipeline that supports Node.js and Cypress.
