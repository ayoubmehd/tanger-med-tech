#!/usr/bin/env node

"use strict";
const { writeFileSync, fstat, existsSync } = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const controllersTemplate = `
import { NextFunction, Request, Response, Router } from "express";

export function index(req: Request, res: Response, next: NextFunction) {}
export function create(req: Request, res: Response, next: NextFunction) {}
export function findOne(req: Request, res: Response, next: NextFunction) {}
export function update(req: Request, res: Response, next: NextFunction) {}
export function destroy(req: Request, res: Response, next: NextFunction) {}

`;
const routesTemplate = `
import { Router } from "express";

import * as containers from "../controllers/container.controller";

const router = Router();

router.get("/", containers.index);
router.post("/", containers.create);
router.get("/:id", containers.findOne);
router.patch("/:id", containers.update);
router.delete("/:id", containers.destroy);

export default router;

`;

const routesNaming = "[name].ts";
const routesDir = path.join(__dirname, "../routes");
const controllersNaming = "[name].conroller.ts";
const controllersDir = path.join(__dirname, "../controllers");

const questions = [
  {
    type: "input",
    name: "resource_name",
    message: "What's the resource name?",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { resource_name } = answers;

  const conrollerFile = `${routesDir}/${routesNaming.replace(
    "[name]",
    resource_name
  )}`;
  const routeFile = `${routesDir}/${routesNaming.replace(
    "[name]",
    resource_name
  )}`;

  if (existsSync(conrollerFile)) {
    console.error(`File Already exists ${conrollerFile}`);
    process.exit();
  }
  if (existsSync(routeFile)) {
    console.error(`File Already exists ${routeFile}`);
    process.exit();
  }

  writeFileSync(
    `${controllersDir}/${controllersNaming.replace("[name]", resource_name)}`,
    routesTemplate
  );
  writeFileSync(
    `${routesDir}/${routesNaming.replace("[name]", resource_name)}`,
    routesTemplate
  );
});
