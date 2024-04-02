import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect((process.env.MONGODB_CONNECT_STRING) as string).then(()=>console.log("Connect to database"));
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});

//! const app = express();

// !This line creates an instance of the Express application by calling the express function. This app object represents your Express application and is used to configure routes, middleware, and other settings.

//! app.use(express.json());

//! This line tells our application to understand and work with JSON data that comes in the requests. So, if our frontend sends JSON data to the server, Express knows how to handle it.

//! app.use(cors());

//! CORS (Cross-Origin Resource Sharing) allows our backend to communicate with other servers or domains. This line enables CORS so that our server can talk to different domains without any issues.
