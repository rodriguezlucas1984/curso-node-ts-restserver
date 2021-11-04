import Usuario from "../models/usuario";

export const emailExiste = async (email: string) => {
  const existeEmail = await Usuario.findOne({ where: { email } });
  if (existeEmail) {
    throw new Error(`El email ${email} ya esta registrado`);
  }
};

export const existeUsuarioPorId = async (id: number) => {
  const existeUsuario = await Usuario.findByPk(id);
  if (!existeUsuario) {
    throw new Error(`El id ${id} no existe`);
  }
};
