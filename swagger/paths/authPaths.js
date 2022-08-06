const authPaths = {
  '/auth/sign-up': {
    post: {
      summary: 'Sign-up a new user',
      tags: ['Auth'],
      description: 'The first tree users will be as Manager',
      requestBody: {
        description: 'Meetup object',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SignUp',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SignUp',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },

  '/auth/sign-in': {
    post: {
      summary: 'Sign-in',
      tags: ['Auth'],
      description: 'Sign in the system',
      requestBody: {
        description: 'Meetup object',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SignIn',
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/User',
              },
            },
          },
        },
        401: {
          description: 'Unauthorized',
        },
        400: {
          description: 'Bad request',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },

  '/auth/tokens': {
    put: {
      summary: 'Get new pair of tokens',
      tags: ['Auth'],
      description: 'Get new pair of tokens',
      requestBody: {
        description: 'Meetup object',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/RefreshToken',
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tokens',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        404: {
          description: 'Not found',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },

  '/auth/disable-tokens': {
    delete: {
      summary: 'Delete a token',
      tags: ['Auth'],
      description: 'Delete a refresh token from a database',
      requestBody: {
        description: 'token object',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/RefreshToken',
            },
          },
        },
      },
      responses: {
        204: {
          description: 'No content',
        },
        400: {
          description: 'Bad request',
        },
        404: {
          description: 'Not found',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },
};

export default authPaths;
