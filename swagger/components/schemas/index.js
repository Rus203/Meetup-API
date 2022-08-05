import authSchemas from './authSchemas.js';
import meetupSchemas from './meetupSchemas.js';

export const schemas = {};
Object.assign(schemas, authSchemas, meetupSchemas);
