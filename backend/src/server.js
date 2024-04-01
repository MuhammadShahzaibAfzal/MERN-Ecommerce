import app from "./app";
import { PORT } from "./config";

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listning on port ${PORT} 🚀`);
    });
  } catch (error) {
    console.log(`Error while starting server : ${error.message} 😢😢`);
  }
};

startServer();
