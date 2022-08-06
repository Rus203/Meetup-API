const participantSchemas = {
  Participants: {
    type: 'object',
    properties: {
      meetupId: {
        type: 'string',
        format: 'uuid',
        example: '047f888f-541a-4b62-98bc-b1b9e1884f53',
      },
      participants: {
        type: 'array',
        items: {
          properties: {
            login: {
              type: 'string',
              example: 'Bananazavrik312',
            },
            name: {
              type: 'string',
              example: 'Loren',
            },
            id: {
              type: 'string',
              format: 'uuid',
              example: '87d49eea-178e-4368-9ec9-0ead241ff547',
            },
          },
        },
      },
    },
  },
};

export default participantSchemas;
