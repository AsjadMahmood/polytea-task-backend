import { registerAs } from '@nestjs/config';

/**
 * Mongo database connection config
 */
export default registerAs('mongodb', () => {
  const { MONGODB_URL } = process.env;

  return {
    uri: `${MONGODB_URL}`,
  };
});
