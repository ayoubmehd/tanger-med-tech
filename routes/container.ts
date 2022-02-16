import { Router } from "express";

import * as container from "@controllers/container.controller";
import auth from "@middleware/auth";

const router = Router();

router.use(auth);

router.get("/", container.index);
router.post("/", container.create);
router.get("/:id", container.findOne);
router.patch("/:id", container.update);
router.delete("/:id", container.destroy);

export default router;
