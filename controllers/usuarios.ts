import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const { limite, desde } = req.query;
  const query = {
    where: { estado: true },
    limit: limite !== undefined ? +limite : 5,
    offset: desde !== undefined ? +desde : 0,
  };
  const { rows, count } = await Usuario.findAndCountAll(query);

  res.json({ total: count, usuarios: rows });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    res.json({
      usuario,
    });
  } else {
    res.status(400).json({
      msg: `No existe el usuario con el id ${id}`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { nombre, estado, email } = req.body;
  try {
    const usuario = await Usuario.create({ nombre, email, estado });
    res.json({ usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hable con el administrador" });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res
        .status(400)
        .json({ msg: `No existe el usuario con el id ${id}` });
    }

    if (email) {
      const existeEmail = await Usuario.findOne({ where: { email: email } });

      if (existeEmail && existeEmail.id !== usuario.id) {
        return res.json({ msg: "Ya existe un usuario con el mismo correo" });
      }
    }

    usuario.update({
      nombre: nombre ? nombre : usuario.nombre,
      email: email ? email : usuario.email,
    });

    res.json({ usuario });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Hable con el administrador" });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    return res
      .status(400)
      .json({ msg: `No existe el usuario con el id ${id}` });
  }

  await usuario.update({ estado: false });

  res.json({
    usuario,
  });
};
