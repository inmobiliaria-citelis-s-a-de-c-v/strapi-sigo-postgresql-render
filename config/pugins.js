module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'dev.silva@citelis.mx',
      defaultReplyTo: 'dev.silva@citelis.mx',
      testAddress: 'a.quintos@citelis.mx',
    },
  },
  // ...
});