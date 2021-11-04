import { DataTypes ,Model} from "sequelize";
import db from "../db/connection";

interface UserInstance extends Model {
  id: number;
  nombre: string;
  estado:boolean;
  email:string;
}

const Usuario = db.define<UserInstance>("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
  email: {
    type: DataTypes.STRING,
  },
});

export default Usuario;
