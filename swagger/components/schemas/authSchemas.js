const authSchema = {
  SignIn: {
    type: 'object',
    properties: {
      login: {
        type: 'string',
        example: 'BananaZavrik235',
        description: "User's login",
      },
      password: {
        type: 'string',
        example: 'grmif444',
        description: "User's password",
      },
    },
  },

  SignUp: {
    allOf: [
      { $ref: '#/components/schemas/SignIn' },
      {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Loren',
            description: "User's name",
          },
        },
      },
    ],
  },

  RefreshToken: {
    type: 'object',
    properties: {
      refreshToken: {
        type: 'string',
        description: "User's a refresh token",
      },
    },
  },

  Tokens: {
    type: 'object',
    allOf: [
      {
        $ref: '#/components/schemas/RefreshToken',
      },
    ],
    properties: {
      accessToken: {
        type: 'string',
        description: "User's an access token",
      },
    },
  },

  User: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'Loren',
        description: "User's name",
      },
      login: {
        type: 'string',
        example: 'BananaZavrik235',
        description: "User's login",
      },
    },
  },
};

export default authSchema;
