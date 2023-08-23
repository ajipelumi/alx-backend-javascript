import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Use the routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Export the app
export default app;
