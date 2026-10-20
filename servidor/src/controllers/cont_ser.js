import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_ser = (pet, resp)=>{
    resp.render('menu_ser')
}

export const alta_ser = (pet, resp)=>{
    resp.render('alta_ser')
}

export const baja_ser = (pet, resp)=>{
    resp.render('baja_ser')
}

export const mod_ser = (pet, resp)=>{
    resp.render('mod_ser')
}

export const busc_ser = (pet, resp)=>{
    resp.render('busc_ser', {federico: false })
}



export const nuevo_ser = async (pet, resp) => {

    let id, nombre, costo, odo;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    costo = pet.body.costo;
    odo = pet.body.idOdo;

    try {

        let altasql = "INSERT INTO tratamiento (idtratamiento, nombre, costo, odontologo_idodontologo) VALUES ('" + id + "', '" + nombre + "', '" + costo + "',  '" + odo + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_ser', {
            guardado: true,
            alert: true,
            msj: 'Servicio Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_ser', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el servicio.'
        });
    }
};


export const mos_ser = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento ORDER BY idtratamiento;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_ser', { registros });
    } catch (error) {
        console.log("No puede mostrar los tratamientos");
    }
}

export const buscser_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE idtratamiento = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_ser', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar el servicio:', error);
    }
}