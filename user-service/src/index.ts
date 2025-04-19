import app from './app';
import { connectToDB } from './config';

const PORT = process.env.PORT || 3000;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`User service is running on port ${PORT}`);
  });
});
