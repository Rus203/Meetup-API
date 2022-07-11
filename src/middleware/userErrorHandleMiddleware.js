export const userErrorHandle = middleware => {
  return async (request, response, next) => {
    try {
      await middleware(request, response)
    } catch (error) {
      next(error)
    }
  }
}
