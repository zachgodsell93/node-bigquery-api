import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3333;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.get("/health", (req: Request, res: Response) => {
	res.send("OK");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
