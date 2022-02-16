import { Router } from "express";
import auth from "./auth";
import containers from "./container";

const router = Router();

router.use("/containers", containers);
router.use(auth);

export default router;
