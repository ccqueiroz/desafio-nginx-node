import { connection } from './createConnection.js';
import { queryCreateTablePeoples } from './queries/queryCreateTablePeoples.js';

export const createTablePeoples = () => {
    return new Promise((_, reject) => {
        connection.query(
            queryCreateTablePeoples, 
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    console.log('Tabela de Pessoas criada com sucesso!');
                }
            }
        );
    });
}