# Scratch
 a full-stack serverless app built with SST, Using React.js, AWS Lambda, API Gateway, DynamoDB, and Cognito.

Live site here: https://serverless-note-app.com/

## Features

- Lambda & API Gateway for the serverless API
- DynamoDB for the database
- Cognito for user authentication and securing the APIs
- S3 for hosting the app and file uploads
- CloudFront for serving out the app
- Route 53 for the domain
- Certificate Manager for SSL
- CloudWatch for Lambda and API access logs
- React.js for the single page app
- React Router the routing
- Bootstrap for the UI Kit
- Stripe for processing credit card payments
- Seed for automating serverless deployments
- Netlify for automating React deployments
- GitHub for hosting project repos
- Sentry for error reporting

![image](https://github.com/Minna937/sst.dev/assets/117592811/c1edad3d-40ce-437e-b036-6650b603128f)

This repo is a full-stack serverless app built with [SST](https://github.com/serverless-stack/sst).

- The `stacks/` directory defines our AWS infrastructure using AWS CDK.
- The `packages/` directory contains the Lambda functions that power the CRUD API.
- The `frontend/` directory contains the React app.

It's a single-page React app powered by a serverless CRUD API. We also cover how add user authentication, handle file uploads, and process credit card payments with Stripe.

### Usage

Clone this repo.

```bash
$ git clone https://github.com/serverless-stack/demo-notes-app
```

Install dependencies.

```bash
$ npm install
```

This project refers to a `.env.local` file with a secret that we are not checking in to the repo. Make sure to create one before deploying - https://sst.dev/chapters/handling-secrets-in-sst.html.

#### Developing Locally

Start the [Live Lambda Dev Environment](https://docs.sst.dev/live-lambda-development).

```bash
$ npx sst dev
```

Install dependencies for the frontend React app.

```bash
$ cd frontend
$ npm install
```

Start the React local dev environment from the `frontend/` dir.

```bash
$ npm start
```

#### Running Tests

From the project root.

```bash
$ npm test
```

#### Deploying to Prod

Run this in the project root to deploy it to prod.

```bash
$ npx sst deploy
```

