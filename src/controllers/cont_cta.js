import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_cta = (pet, resp)=>{
    resp.render('menu_cta')
}

export const alta_cta = (pet, resp)=>{
    resp.render('alta_cta')
}

export const baja_cta = (pet, resp)=>{
    resp.render('baja_cta')
}

export const mod_cta = (pet, resp)=>{
    resp.render('mod_cta')
}

export const busc_cta = (pet, resp)=>{
    resp.render('busc_cta')
}



export const nuevo_cta = async (pet, resp) => {

    let id, saldo, trat;

    id = pet.body.clave;
    saldo = pet.body.saldo;
    trat = pet.body.idTrat;
   
    try {

        let altasql = "INSERT INTO cta_cte (afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado) VALUES ('" + id + "', '" + saldo + "', '" + trat + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_cta')
    } catch (Error) {
        console.log('Error, en la sentencia INSERT');
        console.log(Error)
    }
}


export const mos_cta = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte ORDER BY afiliado_ci_afiliado ;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_cta', { registros });
    } catch (error) {
        console.log("No puede mostrar las cta cte");
    }
}