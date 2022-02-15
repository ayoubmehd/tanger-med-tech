import { Router } from "express";
import containers from "./container";

const router = Router();

router.use("/containers", containers);

export default router;
