import { Router } from "express";
import { isLoggedIn } from "../middlewares/protectedRoutes.js";
import { validator } from "../middlewares/validator.middleware.js";
import {
    Docente,
    CuentasEstudiantes
} from "../controllers/docente.controller.js";
import { createLinkSchema } from "../schemas/task.schema.js";

const router = Router();

// rutas de docente
// router.get('/docentes/cuentasestudiantes',isLoggedIn, CuentasEstudiantes );
router.get('/docente', Docente );
router.get('/cuentasestudiante', CuentasEstudiantes );


export default router;
