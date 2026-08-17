// This file will combine all routes in this folder


import { Router } from "express";
import { healthRouter } from "./health.routes.js";

export const apiRouter = Router();

// Plug health router inside this file. 
apiRouter.use(healthRouter)
