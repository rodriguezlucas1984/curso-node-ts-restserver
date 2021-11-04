import express, { Application } from "express";
import cors from "cors";

import userRoutes from "../routes/usuarios";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    //Conexion de base de datos
    this.dbConnection();
    //Definir mis middlewares
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error: unknown) {
      console.log(error);
      throw new Error(
        typeof error === "string"
          ? error
          : "Error al conectarse a la base de datos"
      );
    }
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura del body
    this.app.use(express.json());
    //Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

export default Server;
