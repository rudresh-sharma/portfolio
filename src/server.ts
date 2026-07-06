import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { Request, Response } from 'express';
import {join} from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Body Parser Middleware
app.use(express.json());

/**
 * Express REST API contact endpoint.
 * Handles portfolio contact submissions securely on the server.
 */
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  console.log('\n======================================================');
  console.log('📬 NEW PORTFOLIO CONTACT MESSAGE RECEIVED');
  console.log(`From:    ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log('======================================================\n');

  res.status(200).json({
    success: true,
    message: 'Message successfully registered on Rudresh\'s backend container.',
    timestamp: new Date().toISOString()
  });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
