import authSchemas from './authSchemas.js';
import meetupSchemas from './meetupSchemas.js';
import participantSchemas from './ParticipantSchemas.js';

export const schemas = {};
Object.assign(schemas, authSchemas, meetupSchemas, participantSchemas);
