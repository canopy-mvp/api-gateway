export function requestLogger() {
  return async (req: any, reply: any) => {
    req.log.info({ method: req.method, url: req.url }, 'Incoming request');
  };
}
