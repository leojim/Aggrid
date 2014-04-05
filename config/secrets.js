module.exports = {
  //db: process.env.MONGODB|| 'mongodb://localhost:27017/test',
  db: process.env.MONGODB|| 'mongodb://Aggrid:90c85a1a11f21bcdee26d3be8d1fd1fd@oceanic.mongohq.com:10088/Aggrid',



  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  localAuth: true,

  mailgun: {
    login: process.env.MAILGUN_LOGIN || 'Your Mailgun SMTP Username',
    password: process.env.MAILGUN_PASSWORD || 'Your Mailgun SMTP Password'
  },

  sendgrid: {
    user: process.env.SENDGRID_USER || 'Your SendGrid Username',
    password: process.env.SENDGRID_PASSWORD || 'Your SendGrid Password'
  },

  nyt: {
    key: process.env.NYT_KEY || 'Your New York Times API Key'
  },

  lastfm: {
    api_key: process.env.LASTFM_KEY || 'Your API Key',
    secret: process.env.LASTFM_SECRET || 'Your API Secret'
  },

  facebookAuth: true,
  facebook: {
    clientID: process.env.FACEBOOK_ID || '674194212646942',
    clientSecret: process.env.FACEBOOK_SECRET || '2be7879cfdc2344c7c777bfb289eb684',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  githubAuth: true,
  github: {
    clientID: process.env.GITHUB_ID || 'e1ab811838d4c393fbb6',
    clientSecret: process.env.GITHUB_SECRET || 'f4b96a41b94cf8bb6357b098bd0a3a4a2b6a32f4',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitterAuth: true,
  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'exk39O75jtCTcUXMXR3tibnCn',
    consumerSecret: process.env.TWITTER_SECRET  || 'mo7gpiV2CykifU7cGBRKj5uRHHHJB2sTZnokcVOkAAN9bvHnIp',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  googleAuth: true,
  google: {
    clientID: process.env.GOOGLE_ID || '166828910473-tblo6kspee0u8jfegucn8bf6a18ptccq.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'XI1K2jguQHmKnMfTo8HqYcgU',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedinAuth: true,
  linkedin: {
    clientID: process.env.LINKEDIN_ID || '75e9akgz8khbbo',
    clientSecret: process.env.LINKEDIN_SECRET || 'pHHGLHo4Hm3XXWFH',
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_fullprofile', 'r_emailaddress', 'r_network'],
    passReqToCallback: true
  },

  steam: {
    apiKey: process.env.STEAM_KEY || 'Your Steam API Key'
  },

  twilio: {
    sid: process.env.TWILIO_SID || 'Your Twilio SID',
    token: process.env.TWILIO_TOKEN || 'Your Twilio token'
  },

  clockwork: {
    apiKey: process.env.CLOCKWORK_KEY || 'Your Clockwork SMS API Key'
  },

  tumblr: {
    consumerKey: process.env.TUMBLR_KEY || 'xqdX5iwIbKs6vyvc1Db4yx0x0AFQ5Mi22k7IfsBmp0uZzXZZbc',
    consumerSecret: process.env.TUMBLR_SECRET || '1R9x5S1dqdGIwoSe7Rq6ijCAwxIp3mzrfm6WQxm5aLGPbbDlXn',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: process.env.FOURSQUARE_ID || 'TGAK1VHSEGL0ATCMAWYIHBX4Q1ABMHF111YM3GPR4STIVXJA',
    clientSecret: process.env.FOURSQUARE_SECRET || 'MTX1XOSGFDAYZISXTJQBPEPTKDEIL12IH1QANJ1KGI1YUWTD',
    redirectUrl: process.env.FOURSQUARE_REDIRECT_URL || 'http://localhost:3000/auth/foursquare/callback'
  },

  venmo: {
    clientId: process.env.VENMO_ID || 'Your Venmo Client ID',
    clientSecret: process.env.VENMO_SECRET || 'Your Venmo Client Secret',
    redirectUrl: process.env.VENMO_REDIRECT_URL || 'http://localhost:3000/auth/venmo/callback'
  },

  paypal: {
    host: process.env.PAYPAL_HOST || 'api.sandbox.paypal.com',
    client_id: process.env.PAYPAL_ID || 'Your Client ID',
    client_secret: process.env.PAYPAL_SECRET || 'Your Client Secret',
    returnUrl: process.env.PAYPAL_RETURN_URL || 'http://localhost:3000/api/paypal/success',
    cancelUrl: process.env.PAYPAL_CANCEL_URL || 'http://localhost:3000/api/paypal/cancel'
  }
};
