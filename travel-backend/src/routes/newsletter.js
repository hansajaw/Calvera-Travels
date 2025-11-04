import express from "express";
import { subscribeUser } from "../controllers/newsletter.controller.js";

const router = express.Router();

// POST /api/v1/newsletter/subscribe
router.post("/subscribe", subscribeUser);

export default router;
