import Sequelize from 'sequelize';
import databaseCoonfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(databaseCoonfig);

models.forEach((model) => { model.init(connection); });
