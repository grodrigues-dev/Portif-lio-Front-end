let stores = ['jogadores'];
let version = 3;
let dbName ="Projeto-ES6";
class ConnectionFactory {

    constructor (){
        throw new Error('Não é possível instanciar a classe')
    }

    static getConnection (){
        return new Promise((resolve,reject) =>{
            let openRequest = indexedDB.open(dbName, version); 
            openRequest.onupgradeneeded = e =>{

            }

            openRequest.onsuccess = e => {

            }

            openRequest.onerror = e =>{

            }

        });
    }


}