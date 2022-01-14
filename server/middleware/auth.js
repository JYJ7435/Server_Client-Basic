const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증 처리

  //1.클라이언트 쿠키에서 토큰을 가져옴
  let token = req.cookies.x_auth;

  //2.토큰을 복호화 한후 유저를 찾음
  User.findByToken(token, (err, user) => {
    if (err) return err;
    if (!user) return res.json({ isAuth: false, error: true });

    //3.유저가 있으면 인증 True
    //4.유저가 없으면 인증 False
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
