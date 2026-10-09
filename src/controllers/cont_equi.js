import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_equi = (pet, resp)=>{
    resp.render('menu_equi')
}

export const alta_equi = (pet, resp)=>{
    resp.render('alta_equi')
}

export const baja_equi = (pet, resp)=>{
    resp.render('baja_equi')
}

export const mod_equi = (pet, resp)=>{
    resp.render('mod_equi')
}

export const busc_equi = (pet, resp)=>{
    resp.render('busc_equi')
}



export const nuevo_equi = async (pet, resp) => {

    let id, tipo, fecha, cons;

    id = pet.body.clave;
    tipo = pet.body.tipo;
    fecha = pet.body.fecha;
    cons = pet.body.idCons;
    try {

        let altasql = "INSERT INTO equipamineto (inroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio) VALUES ('" + id + "', '" + tipo + "', '" + fecha + "', '" + cons + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_equi')
    } catch (Error) {
        console.log('Error, en la sentencia INSERT');
        console.log(Error)
    }
}


export const mos_equi = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT nroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento ORDER BY nroserie;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_equi', { registros });
    } catch (error) {
        console.log("No puede mostrar los equipamientos");
    }
}