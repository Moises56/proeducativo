// ruta para renderizar el formulario del test que esta en la carpeta views/test/test.hbs

import { Router } from "express";
import { isLoggedIn, isDocente } from "../middlewares/protectedRoutes.js";
import { validator } from "../middlewares/validator.middleware.js";

import {
  renderAddTest,
  addTest,
  renderTest,
} from "../controllers/test.controller.js";
import { createTemaSchema } from "../schemas/task.schema.js";

const router = Router();


router.get("/addTest",isLoggedIn, isDocente, renderAddTest);
router.post("/addTest",isLoggedIn, isDocente, addTest);

router.get("/listTest",isLoggedIn, isDocente, renderTest);



export default router;


