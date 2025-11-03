import express from "express";
import { subscribeUser } from "../controllers/newsletter.controller.js";

const router = express.Router();

router.post("/subscribe", subscribeUser);

export default router;
