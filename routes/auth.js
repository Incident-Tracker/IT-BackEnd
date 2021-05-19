const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {User} = require('../models');

const router = express.Router();
router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const{email, nick, password} = req.body;
    try{
        const exUser = await User.find({where : {email}});
        if(exUser){
            req.flash('joinError', "이미 가입된 이메일입니다");
            return res.redirect('/join');
        }
    }catch(error){
        console.error(error);
        return next(error);
    }
})