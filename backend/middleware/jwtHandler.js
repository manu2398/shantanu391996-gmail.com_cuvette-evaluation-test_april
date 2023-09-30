const jwthandler = (user, res) => {
  const token = user.getJwtToken();

  const expirationDate = new Date(
    Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  );

  const options = {
    expires: expirationDate,
    httpOnly: true,
  };

  res
    .status(200)
    .cookie("token", token, options)
    .json({ user: user._doc, token });
};

module.exports = jwthandler;
