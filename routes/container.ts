import { Router } from "express";

import * as container from "@controllers/container.controller";

const router = Router();

router.get("/", container.index);
router.post("/", container.create);
router.get("/:id", container.findOne);
router.patch("/:id", container.update);
router.delete("/:id", container.destroy);

export default router;
