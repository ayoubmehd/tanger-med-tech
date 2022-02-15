import { NextFunction, Request, Response, Router } from "express";
import ContainerModel from "../models/Container.model";
import MongoBaseRepo from "../repos/MongoBaseRepo";

const container = new MongoBaseRepo<Container>(ContainerModel);

export async function index(req: Request, res: Response, next: NextFunction) {
  res.json(await container.find());
}
export async function create(
  req: CustomRequest<Omit<Container, "_id">>,
  res: Response,
  next: NextFunction
) {
  res.json(await container.create(req.body));
}
export async function findOne(req: Request, res: Response, next: NextFunction) {
  res.json(await container.findById(req.params.id));
}
export async function update(
  req: CustomRequest<Omit<Container, "_id">>,
  res: Response,
  next: NextFunction
) {
  res.json(await container.update(req.params.id, req.body));
}
export async function destroy(req: Request, res: Response, next: NextFunction) {
  res.json(await container.destroy(req.params.id));
}
