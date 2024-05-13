export const sendToken = (user, statusCode, message, res) => {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(
        Date.now() +3600000
      ),
      httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };