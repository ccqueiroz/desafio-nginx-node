import mysql from 'mysql';
import { dataBaseConfig } from './database.config.js';

const connection = mysql.createPool(dataBaseConfig);

export { connection };