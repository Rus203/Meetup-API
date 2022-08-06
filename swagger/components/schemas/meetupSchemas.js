const meetupSchemas = {
  Meetup: {
    type: 'object',
    allOf: [{ $ref: '#components/schemas/MeetupRequest' }],
    properties: {
      organizerId: {
        type: 'string',
        format: 'uuid',
        example: '86ce5a6e-e84c-467d-82ae-ba28264d9b0e',
      },
    },
  },

  MeetupRequest: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "Meetup's name",
        required: true,
        example: 'Groundhog Day',
      },
      description: {
        type: 'string',
        description: 'Topic of the meeting',
        required: true,
        example: 'Your offers',
      },
      keyWords: {
        type: 'array',
        description: 'Key words or tags of a meetup',
        items: {
          type: 'string',
        },
        example: ['Tomorrow', 'Immediately'],
      },
      date: {
        type: 'string',
        format: 'date',
        description: 'Date of a meetup',
        example: '2022.04.23, 12:23',
      },
      place: {
        type: 'string',
        description: 'Place of a meetup',
        example: '420 Paper St, Minsk',
      },
    },
  },

  Meetups: {
    type: 'array',
    items: {
      $ref: '#/components/schemas/Meetup',
    },
  },
};

export default meetupSchemas;
