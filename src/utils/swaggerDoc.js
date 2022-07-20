export const swaggerDoc = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'CRUD REST API for meetups',
    description: 'My API system of meetups ',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:3000',
  basePath: '/api',
  tags: [
    {
      name: 'Meetups',
      description: 'API for all meetups in the system',
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    '/meetups': {
      get: {
        tags: ['Meetups'],
        summary: 'Get all meetups in system',
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Meetup',
            },
          }
        },
      },
      post: {
        tags: ['Meetups'],
        summary: 'Meetup that we want to create',
        description: 'Add a new meetup',
        parameters: [
          {
            in: 'body',
            schema: {
              $ref: '#/definitions/Meetup',
            },
          },
        ],
        responses: {
          201: {
            description: 'Created',
            schema: {
              $ref: '#/definitions/Meetup',
            },
          },
          400: {
            description: 'Bad request',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
        },
      },
      put: {
        summary: 'Change or add a meetup',
        tags: ['Meetups'],
        parameters: [
          {
            in: 'body',
            schema: {
              $ref: '#/definitions/upgradeMeetup',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Meetup',
            },
          },
          404: {
            description: 'Not found',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
        },
      },
    },
    '/meetups/{id}': {
      get: {
        tags: ['Meetups'],
        summary: 'Get a certain meetup in system',
        parameters: [
          {
            in: 'query',
            description:
              'There are two features here: searching for a record by any of the key of model and sorting. But you can use only one of these features',
            example: '?sort=name,asc\t?place=Minsk',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Meetup',
            },
          },
          404: {
            description: 'Not found',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
          500: {
            description: 'Common error',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
        },
        
      },
      patch: {
        summary: 'Modify meetup with given Id',
        tags: ['Meetups'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Id of user that we want to modify',
            type: 'uuidv4',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Meetup',
            },
          },
          400: {
            description: 'Bad request',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
          404: {
            description: 'Not found',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
        },
      },
      delete: {
        summary: 'Delete meetup with given Id',
        tags: ['Meetups'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of user that we want to delete',
            type: 'uuidv4',
          },
        ],
        responses: {
          204: {
            description: 'No content',
          },
          404: {
            description: 'Not found',
            schema: {
              $ref: '#/definitions/Error'
            }
          },
        },
      },
    },
  },
  definitions: {
    Meetup: {
      required: ['name', 'description', 'keyWords', 'time', 'place'],
      properties: {
        name: {
          type: 'string',
          minimum: '1',
          maximum: '50',
          required: true,
          example: 'Groundhog Day',
        },
        description: {
          type: 'string',
          required: true,
          example: 'We wanna see everyone',
        },
        keyWords: {
          type: 'array',
          items: {
            type: 'string',
          },
          example: ['Groundhog Day', 'Holiday', 'forAll'],
        },
        time: {
          type: 'string',
          format: 'time',
          example: '10:00',
        },
        place: {
          type: 'string',
          minimum: '1',
          maximum: '50',
          example: 'Victory square',
        },
      },
    },
    upgradeMeetup: {
      description: 'Such an object require for put request',
      required: ['name', 'description', 'keyWords', 'time', 'place'],
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          unique: true,
        },
        name: {
          type: 'string',
          example: 'party',
          minimum: '1',
          maximum: '50',
          required: true,
        },
        description: {
          type: 'string',
          example: 'celebration the new year',
          required: true,
        },
        keyWords: {
          type: 'array',
          items: {
            type: 'string',
          },
          example: ['today', 'top'],
          required: true,
        },
        time: {
          type: 'string',
          example: '12:00',
          required: true,
        },
        place: {
          type: 'string',
          minimum: '1',
          maximum: '50',
          example: 'Rest room',
          required: true,
        },
      },
    },
    Error: {
      required: ['name', 'status', 'reason'],
      properties: {
        name: {
          type: 'string'
        },
        reason: {
          type: 'string'
        },
        message: {
          type: 'string'
        }
      }
    }
  },
}
