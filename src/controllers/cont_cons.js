import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_cons = (pet, resp)=>{
    resp.render('menu_cons')
}

export const alta_cons = (pet, resp)=>{
    resp.render('alta_cons')
}

export const baja_cons = (pet, resp)=>{
    resp.render('baja_cons')
}

export const mod_cons = (pet, resp)=>{
    resp.render('mod_cons')
}

export const busc_cons = (pet, resp)=>{
    resp.render('busc_cons')
}


export const nuevo_cons = async (pet, resp) => {

    let id, nro, idlocal;

    id = pet.body.clave;
    nro = pet.body.nCons;
    idlocal = pet.body.idLocal;

    try {

        let altasql = "INSERT INTO consultorio (idconsultorio, numero, local_idlocal) VALUES ('" + id + "', '" + nro + "', '" + idlocal + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_cons')
    } catch (Error) {
        console.log('Error, en la sentencia INSERT');
        console.log(Error)
    }
}


export const mos_cons = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio ORDER BY idconsultorio;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_cons', { registros });
    } catch (error) {
        console.log("No puede mostrar los Consultorios");
    }
}