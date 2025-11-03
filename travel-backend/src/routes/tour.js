import express from "express";
import { bookTour } from "../controllers/tour.controller.js";

const router = express.Router();

router.post("/book", bookTour);

export default router;
