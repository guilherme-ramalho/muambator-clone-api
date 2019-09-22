import { Router } from "express";
import PackageController from "./app/controllers/PackageController";

const routes = new Router();

routes.get("/package", PackageController.get);

export default routes;
