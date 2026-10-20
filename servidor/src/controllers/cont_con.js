import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_con = (pet, resp)=>{
    resp.render('menu_con')
}

export const alta_con = (pet, resp)=>{
    resp.render('alta_con', {alert: false})
}

export const baja_con = (pet, resp)=>{
    resp.render('baja_con')
}

export const mod_con = (pet, resp)=>{
    resp.render('mod_con')
}

export const busc_con = (pet, resp)=>{
    resp.render('busc_con', {federico: false})
}


export const nuevo_con = async (pet, resp) => {

    let id, nombre, rebaja;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    rebaja = pet.body.rebaja;
    try {

        let altasql = "INSERT INTO convenio (idconvenio, nombre, rebaja) VALUES ('" + id + "', '" + nombre + "', '" + rebaja + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_con', {
            guardado: true,
            alert: true,
            msj: 'Convenio Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_con', {
            guardado: false,
            z: true,
            msj: 'No se pudo guardar el convenio.'
        });
    }
};


export const mos_con = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconvenio, nombre, rebaja FROM convenio ORDER BY idconvenio;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_con', { registros });
    } catch (error) {
        console.log("No puede mostrar los convenios");
    }
}


export const buscon_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE idconvenio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_con', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}

