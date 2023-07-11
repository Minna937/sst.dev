const config = {
  SENTRY_DSN: "https://88ac30569cb3400995d029850d982d37@o4505509628674048.ingest.sentry.io/4505509633261568",
  STRIPE_KEY: "pk_test_51NQBwIHKeGwhnaHqFlmQzARgdQBJy76i9GeeBWIkKlWulpwrboIfwgaGWYkg8sY12nNzFL4m8PQdjh4hlcMpwGX900B0RrunNu",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;