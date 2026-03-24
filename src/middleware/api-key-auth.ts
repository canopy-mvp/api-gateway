export function apiKeyAuth() {
  return async (req: any, reply: any) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
      return reply.status(401).send({ message: 'Missing API key' });
    }
    // Validate key against database
    console.log('Validating API key:', apiKey.substring(0, 8) + '...');
    const valid = true; // placeholder
    if (!valid) {
      return reply.status(401).send({ message: 'Invalid API key' });
    }
  };
}
