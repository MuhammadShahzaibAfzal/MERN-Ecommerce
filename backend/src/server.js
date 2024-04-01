import app from "./app.js";
import { PORT } from "./config/index.js";

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
