import userServices from './userServices.js'
import { roleServices } from './roleServices.js'
import roles from '../../roles.js'
import token from '../utils/token.js'
import refreshTokenServices from './refreshTokenServices.js'
import { NotUniqueError } from '../errors/NotUniqueError.js'
import { NotFoundError } from '../errors/NotFoundError.js'
import UnauthorizedError from '../errors/UnauthorizedError.js'
import bcrypt from 'bcrypt'

const authServices = {
  async singUp(data) {
    const { login } = data
    const allUsers = await userServices.readAll()
    let uniqueLogin = allUsers.every(item => item.login !== login)
    if (!uniqueLogin) throw new NotUniqueError('Login must be unique')

    const newUser = await userServices.add(data)
    let role
    if (allUsers.length < 1) {
      role = await roleServices.readByName(roles.ORGANIZER)
      await newUser.addRole(role)
    }

    role = await roleServices.readByName(roles.USER)
    await newUser.addRole(role)
    return newUser
  },

  async singIn(data) {
    const { login, password } = data
    const user = await userServices.readByParameters({ login })
    if (!user) {
      throw new NotFoundError("Such the login doesn't exist")
    }

    const isPassword = await bcrypt.compare(password, user.password) // check incorrect passwords

    if (!isPassword) {
      throw new UnauthorizedError('Such the password is incorrect')
    }

    const roles = await roleServices.getRolesOfUser(user)
    let accessToken = token.generateAccessToken({
      userId: user.id,
      login: user.login,
      roles,
    })
    let refreshToken = token.generateRefreshToken({ userId: user.id })
    await user.createRefreshToken({ content: refreshToken })

    return { accessToken, refreshToken }
  },

  async tokens(refreshToken) {
    const dbToken = await refreshTokenServices.readByParameters({
      content: refreshToken,
    })
    if (!dbToken) {
      throw new NotFoundError("Such the token doesn't exist")
    }

    const decodeToken = await token.verifyToken(dbToken.content)

    if (!token.checkExpToken(decodeToken.exp)) {
      throw new UnauthorizedError('Not valid token')
    }

    const user = await dbToken.getUser()

    const roles = await roleServices.getRolesOfUser(user)
    const newAccessToken = token.generateAccessToken({
      userId: user.id,
      login: user.login,
      roles,
    })
    const newRefreshToken = token.generateRefreshToken({ userId: user.id })
    await refreshTokenServices.update(
      { content: dbToken.content },
      { content: newRefreshToken }
    )
    return { accessToken: newAccessToken, refreshToken: newRefreshToken }
  },

  async disableToken(refreshToken) {
    const dbToken = await refreshTokenServices.readByParameters({
      content: refreshToken,
    })
    if (!dbToken) {
      throw new NotFoundError("Such the token doesn't exist")
    }

    const decodeToken = await token.verifyToken(refreshToken)
    if (!token.checkExpToken(decodeToken.exp)) {
      throw new UnauthorizedError('Not valid token')
    }
    await refreshTokenServices.delete({ content: refreshToken })
  },
}

export default authServices
