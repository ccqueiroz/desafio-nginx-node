import { connection } from "./createConnection.js";
import { queryInsertPeople } from "./queries/queryInsertPeople.js";

export const insertPeople = (name) => {
    return new Promise((resolve, reject) => {
        const queryInsertPeopleWithName = queryInsertPeople.replace(":name", name);
        connection.query(
            queryInsertPeopleWithName, 
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            }
        );
    });
} 