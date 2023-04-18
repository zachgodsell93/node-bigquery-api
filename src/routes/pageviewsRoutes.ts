import express from "express";
import { PageviewsController } from "../controllers/GaController";
import bodyParser from "body-parser";

const pageviewsRouter = express.Router();
const pageviewsController = new PageviewsController();
pageviewsRouter.use(express.json());

pageviewsRouter.get("/", async (req, res) => {
	const pv = await pageviewsController.getPageViews();
	res.json(pv);
});

pageviewsRouter.get("/byDate", (req, res) => {
	const startDate = new Date(req.body.startDate);
	const endDate = new Date(req.body.endDate);

	const pv = pageviewsController.getPageViewsBetweenDate(startDate, endDate); // Fixed typo here
	if (pv) {
		res.json(pv);
	} else {
		res.json({});
	}
});

export default pageviewsRouter;
