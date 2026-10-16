import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_afi = (pet, resp)=>{
    resp.render('menu_afi')
}

export const alta_afi = (pet, resp)=>{
    resp.render('alta_afi', {z: false})
}

export const baja_afi = (pet, resp)=>{
    resp.render('baja_afi')
}

export const mod_afi = (pet, resp)=>{
    resp.render('mod_afi')
}

export const busc_afi = (pet, resp)=>{
    resp.render('busc_afi')
}

/*
export const mos_afi = (pet, resp)=>{
    resp.render('mos_afi')
}
    */

export const nuevo_afi = async (pet, resp) => {

    let id, nombre, apellido, telCel, telFijo, plan;
    id = pet.body.clave;
    nombre = pet.body.nombre;
    apellido = pet.body.apellido;

    // pasar los telefonos a nvarchar
    telCel = parseInt(pet.body.telCelular);
    telCel = isNaN(telCel) ? 'NULL' : telCel;

    telFijo = parseInt(pet.body.telFijo);
    telFijo = isNaN(telFijo) ? 'NULL' : telFijo;


    plan = pet.body.tipo;

    try {

       let altasql = "INSERT INTO afiliado (ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan) VALUES ('" + id + "', '" + nombre + "', '" + apellido + "', " + telCel + ", " + telFijo + ", '" + plan + "');";
 
        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_afi', {
            guardado: true,
            z: true,
            msj: 'Afiliado Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_afi', {
            guardado: 'Error',
            z: true,
            msj: 'No se pudo guardar el afiliado.'
        });
    }
};


export const mos_afi = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado ORDER BY ci_afiliado;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_afi', { registros });
    } catch (error) {
        console.log("No puede mostrar los afiliados");
    }
}

/*
export const fun1 = (pet, resp)=>{
    let id1 = pet.params.id;
    selecgt id,nom,ape from clientes where id = id1
}
    */