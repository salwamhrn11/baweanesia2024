module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '05699488bdc1a429154dfaa9ebf3157a'),
    },
  },
});

