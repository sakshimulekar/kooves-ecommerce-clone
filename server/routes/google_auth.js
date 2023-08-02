var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require("dotenv").config()
const  passport=require("passport");
const { UserModel } = require('../models/userModel.model');
const { v4: uuidv4 } = require('uuid');

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    console.log(profile)
   
    let email=profile._json.email
    let firstName=profile._json.given_name
    let lastName=profile._json.family_name
    let picture=profile._json.picture
    
    const user=new UserModel({
        email,
        password:uuidv4(),
        firstName,
        lastName,
        picture
    })
    await user.save()
    return done(null,user)
  }
));
module.exports={
    passport
}