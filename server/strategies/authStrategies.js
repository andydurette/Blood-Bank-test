//Bring in User Schema Models
import { User } from '../models/models.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as GitHubStrategy } from 'passport-github';
// import dotenv from 'dotenv';
// dotenv.config()

// Login With Google ->
// Create A User in MONGODB
// Serialize Deserialize -> Grab that user from the database and return user

const googleStrategy = new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: process.env.NODE_ENV === 'production' ? "https://test-blood-bank.herokuapp.com/auth/google/callback" : "/auth/google/callback"
  },
  function(_, __, profile, cb) {
    User.findOne({googleId: profile.id}, async (err, doc) => {

      if(err) {
        return cb(err, null);
      }
    
      if (!doc) {
        // console.log("OOps?", profile.email.split('@')[1])
        const newUser = new User({
          googleId: profile.id,
          username: profile.name.givenName,
          authType: (profile.emails[0].value.split('@')[1] !== 'instructors.2u.com' ? 'public' : 'admin'),
          userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
        });

        await newUser.save();
        cb(null, newUser);
      }
      cb(null, doc);
    }) 
});


// Login With Twitter ->
// Create A User in MONGODB
// Serialize Deserialize -> Grab that user from the database and return user

const twitterStrategy = new TwitterStrategy({
  consumerKey: `${process.env.TWITTER_CLIENT_ID}`,
  consumerSecret: `${process.env.TWITTER_CLIENT_SECRET}`,
  callbackURL: "/auth/twitter/callback"
},
function(_, __, profile, cb) {
  User.findOne({twitterId: profile.id}, async (err, doc) => {

    if(err) {
      return cb(err, null);
    }

    if (!doc) {
      const newUser = new User({
        twitterId: profile.id,
        username: profile.username
      });

      await newUser.save();
      cb(null, newUser);
    }
    cb(null, doc);
  })

  }
);



// Login With Github ->
// Create A User in MONGODB
// Serialize Deserialize -> Grab that user from the database and return user

const githubStrategy = new GitHubStrategy({
    clientID: `${process.env.GITHUB_CLIENT_ID}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    callbackURL: "/auth/github/callback"
    },
    function(_, __, profile, cb) {

    User.findOne({githubId: profile.id}, async (err, doc) => {

        if(err) {
        return cb(err, null);
        }

        if (!doc) {
        const newUser = new User({
            githubId: profile.id,
            username: profile.username
        });

        await newUser.save();
        cb(null, newUser);
        }
        cb(null, doc);
    })

    }
    );


export  {googleStrategy, twitterStrategy, githubStrategy};