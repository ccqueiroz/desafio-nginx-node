import { connection } from "./createConnection.js";
import { querySelectPeoples } from "./queries/querySelectPeoples.js";

export const selectPeoples = () => {
    return new Promise((resolve, reject) => {
        connection.query(querySelectPeoples, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}