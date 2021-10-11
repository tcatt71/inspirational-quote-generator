import express, { Request, Response, NextFunction } from "express";
import apiRouter from "./routes";
import { join } from "path";
import config from "./config";

const app = express();

app.use(express.static("public"));

app.use(apiRouter);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.sendFile(join(__dirname, "../../public/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    err: err.name,
    msg: err.message,
    custom: "An error occurred on the server",
  });
});

app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}...`)
);
