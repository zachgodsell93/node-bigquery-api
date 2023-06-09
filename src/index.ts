import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes";
import pageviewsRouter from "./routes/pageviewsRoutes";
import helmet from "helmet";

dotenv.config();

const app: express.Express = express();
const port: number = Number(process.env.PORT) || 3333;
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.json());

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello World!");
});

app.get("/health", (req: express.Request, res: express.Response) => {
	res.send("OK");
});

//Routes
app.use("/users", userRouter);
app.use("/pageviews", pageviewsRouter);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
