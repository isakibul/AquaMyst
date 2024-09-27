require("dotenv").config();
const app = require("./app/app");
const http = require("http");
const connectDatabase = require("./db/connectDatabase");

const server = http.createServer(app);

const port = process.env.PORT || 5000;

const main = async () => {
  try {
    await connectDatabase();
    server.listen(port, () => {
      console.log(
        `Server is running on port ${port} - ${new Date().toISOString()}`
      );
    });
  } catch (error) {
    console.log("Database connection field");
    console.log(error);
  }
};

main();
