// Serves the built frontend for the self-hosted deployment.
// The API runs separately on 3001; nginx on the host sends /api there.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const app = express();
app.use(express.static(dist, { maxAge: '1h', index: false }));
app.get(/^(?!\/api).*/, (req, res) => res.sendFile(path.join(dist, 'index.html')));
app.listen(3000, () => console.log('Newsdesk frontend on :3000'));
