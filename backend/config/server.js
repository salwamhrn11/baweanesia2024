module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '05699488bdc1a429154dfaa9ebf3157a'),
    },
  },
});


// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', '05699488bdc1a429154dfaa9ebf3157a'),
//     },
//   },
// });