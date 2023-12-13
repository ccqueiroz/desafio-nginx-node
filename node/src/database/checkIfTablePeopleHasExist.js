import { connection } from './createConnection.js';
import { queryCheckIfTablePeoplesHasExist } from './queries/queryCheckIfTablePeopleHasExist.js';

export const checkIfTablePeoplesHasExist = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            queryCheckIfTablePeoplesHasExist, 
            (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.length > 0);
                }
            }
        );
    });
}