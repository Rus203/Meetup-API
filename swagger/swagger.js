import { paths } from './paths/index.js';
import { components } from './components/index.js';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    description: 'This is a documentation of Meetups api',
    version: '1.0.0',
    title: 'Tasks API',
  },
  tags: [{ name: 'Auth' }, { name: 'Meetups' }],
  servers: [{ url: 'http://localhost:' + process.env.PORT + '/api' }],
  components,
  paths,
};

export default swaggerDefinition;
