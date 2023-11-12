import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import ModelTeam from './ModelTeams';

class SequelizeMatchs extends Model<InferAttributes<SequelizeMatchs>,
InferCreationAttributes<SequelizeMatchs>> {
  declare id: number;
  declare homeTeamGoals: number;
  declare homeTeamId: number;
  declare awayTeamGoals: number;
  declare awayTeamId: number;
  declare inProgress: boolean;
}

SequelizeMatchs.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  timestamps: false,
  sequelize: db,
  modelName: 'matches',
});

SequelizeMatchs.belongsTo(ModelTeam, { as: 'homeTeam', foreignKey: 'homeTeamId' });
SequelizeMatchs.belongsTo(ModelTeam, { as: 'awayTeam', foreignKey: 'awayTeamId' });

export default SequelizeMatchs;
