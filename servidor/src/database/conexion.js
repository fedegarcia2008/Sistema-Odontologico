import mysql from 'mysql2/promise';

export async function conector() {
    try {
        const bdd = await mysql.createPool({
            host: "localhost",
            database: "dbodontologia",
            user: "root",
            password: "bdd123"
        })
        console.log('Conectado');
        return bdd;
    } catch (error) {
        console.log('No conectado');       
    }
};