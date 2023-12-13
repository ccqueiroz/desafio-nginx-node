import { checkIfTablePeoplesHasExist } from './checkIfTablePeopleHasExist.js';
import { createTablePeoples } from './createTablePeoples.js';

checkIfTablePeoplesHasExist()
    .then(result => {
        if (!result) {
            createTablePeoples();
        }
    })
    .catch(error => {
        console.error('Erro ao verificar a existência da tabela:', error);
    });