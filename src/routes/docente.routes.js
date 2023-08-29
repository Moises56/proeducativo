import { Router } from "express";
import { isLoggedIn } from "../middlewares/protectedRoutes.js";
import { validator } from "../middlewares/validator.middleware.js";
import {
    CuentasEstudiantes,
} from "../controllers/docente.controller.js";
import { createLinkSchema } from "../schemas/task.schema.js";

const router = Router();

// rutas de docente
router.get('/Docentes/CuentasEstudiantes',isLoggedIn, CuentasEstudiantes );

export default router;

  