import { Router } from "express";

import { check } from "express-validator";

import {
  deleteUsuario,
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
} from "../controllers/usuarios";
import { emailExiste, existeUsuarioPorId } from "../helpers/db.validator";

import validarCampos from "../middlewares/validar-campos";

const router = Router();

router.get(
  "/",
  [
    check("limite", "El parametro 'limite' debe ser un numero ").isNumeric(),
    check("desde", "El parametro 'desde' debe ser un numero ").isNumeric(),
    validarCampos,
  ],
  getUsuarios
);
router.get(
  "/:id",
  [
    check("id", "No es un ID válido").isNumeric(),
    check("id").custom(existeUsuarioPorId),

    validarCampos,
  ],
  getUsuario
);
router.post(
  "/",
  [
    check("email", "El email no es valido").isEmail(),
    check("email").custom(emailExiste),
    check("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  postUsuario
);
router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isNumeric(),
    check("id").custom(existeUsuarioPorId),

    validarCampos,
  ],
  putUsuario
);
router.delete("/:id", deleteUsuario);

export default router;
