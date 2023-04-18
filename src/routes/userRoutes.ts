import express from "express";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", (req, res) => {
	const users = userController.getUsers();
	res.json(users);
});

userRouter.get("/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const user = userController.getUserById(userId); // Fixed typo here
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ error: "User not found" });
	}
});

// ... other routes ...

export default userRouter;
