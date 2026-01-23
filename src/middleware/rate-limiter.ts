export function rateLimiter(maxRequests: number, windowMs: number) {
  return async (req: any, reply: any) => {
    // Redis-based rate limiting
  };
}
