const meetupPaths = {
  '/meetups': {
    get: {
      summary: 'list of meetups',
      tags: ['Meetups'],
      security: [{ bearerAuth: [] }],
      description:
        'Get all list of meetups. You must pass the authentication to perform this request successfully',
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Meetups',
              },
            },
          },
        },
        401: {
          description: 'Unauthorized',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
    post: {
      summary: 'Create a new meetup',
      tags: ['Meetups'],
      security: [{ bearerAuth: [] }],
      description:
        'Create a new meetup. You must pass the authentication to perform this request successfully and have the admin role.',
      requestBody: {
        name: 'meetup object',
        description: 'meetup object',
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Meetup',
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
                $ref: '#/components/schemas/Meetup',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        403: {
          description: 'Forbidden',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },

  '/meetups/{meetupId}': {
    get: {
      summary: 'list of meetups',
      tags: ['Meetups'],
      security: [{ bearerAuth: [] }],
      description:
        'Get all list of meetups. You must pass the authentication to perform this request successfully',
      parameters: [
        {
          in: 'path',
          name: 'meetupId',
          required: true,
          description: 'Id of a meetup',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Meetup',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        404: {
          description: 'Not found',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
    put: {
      summary: 'Update a meetup',
      tags: ['Meetups'],
      security: [{ bearerAuth: [] }],
      description:
        'Update a current meetup. You must pass the authentication to perform this request successfully and have the admin role.',
      parameters: [
        {
          in: 'path',
          name: 'meetupId',
          required: true,
          description: 'Id of a meetup',
        },
      ],
      requestBody: {
        name: 'meetup object',
        required: true,
        description: 'new meetup object to update',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Meetup',
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
                $ref: '#/components/schemas/Meetup',
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        403: {
          description: 'Forbidden',
        },
        404: {
          description: 'Not found',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
    delete: {
      summary: 'Delete a meetup',
      tags: ['Meetups'],
      security: [{ bearerAuth: [] }],
      description:
        'Delete a meetup. You must pass the authentication to perform this request successfully and have the admin role.',
      parameters: [
        {
          in: 'path',
          name: 'meetupId',
          required: true,
          description: 'id of a meetup',
        },
      ],
      responses: {
        204: {
          description: 'No content',
        },
        401: {
          description: 'Unauthorized',
        },
        400: {
          description: 'Bad request',
        },
        403: {
          description: 'Forbidden',
        },
        404: {
          description: 'Not found',
        },
      },
    },
  },
};

export default meetupPaths;
