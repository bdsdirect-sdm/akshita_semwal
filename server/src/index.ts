import express, { Express, Request, Response } from 'express';
import serverInitialize from './models';
import userRoutes from "./routes/user.routes"
import bodyParser from 'body-parser';
import cors from "cors";
import path from "path";

const app: Express  = express();

app.use(cors(
    {origin: "*"}
));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const port = 5000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });

serverInitialize().then(() => {
    console.log("server initialized")
});

app.use("/", userRoutes);