import app from "./app.js";
import { PORT } from "./config/index.js";
import logger from "./config/logger.js";

const startServer = () => {
  try {
    app.listen(PORT, () => {
      logger.info(`Server is listning on port ${PORT} 🚀`);
    });
  } catch (error) {
    logger.error(`Error while starting server : ${error.message} 😢😢`);
  }
};

startServer();
