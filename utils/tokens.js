import jsonwebtoken from 'jsonwebtoken';

export const generateAccessToken = async (user) => {
  const exp = parseInt(process.env.EXP_ACCESS);
  const content = {
    userId: user.id,
    login: user.login,
    name: user.name,
  };

  return jsonwebtoken.sign(content, process.env.ACCESS_SECRET, {
    expiresIn: exp,
  });
};

export const generateRefreshToken = async (user) => {
  const exp = parseInt(process.env.EXP_REFRESH);
  const content = {
    userId: user.id,
  };

  return jsonwebtoken.sign(content, process.env.REFRESH_SECRET, {
    expiresIn: exp,
  });
};

export const decodeToken = (token) => {
  return jsonwebtoken.decode(token);
};
