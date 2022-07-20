import jsonwebtoken from 'jsonwebtoken'

const token = {
  generateAccessToken (data) {
    return jsonwebtoken.sign(data, process.env.SECRET, { expiresIn: process.env.ACCESS_EXPIRESIN})
  },

  generateRefreshToken (data) {
    return jsonwebtoken.sign(data, process.env.REFRESH_SECRET, { expiresIn: process.env.ACCESS_EXPIRESIN})
  },

  checkExpToken (exp) {
    const currentTime = Date.now()
    const checkingTime = new Date(exp)
    return currentTime > checkingTime
  },

  async verifyToken(token) {
    return jsonwebtoken.verify(token, process.env.REFRESH_SECRET)
  }
}

export default token



