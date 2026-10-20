import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_odo = (pet, resp)=>{
    resp.render('menu_odo')
}

export const alta_odo = (pet, resp)=>{
    resp.render('alta_odo', {alert: false})
}

export const baja_odo = (pet, resp)=>{
    resp.render('baja_odo')
}

export const mod_odo = (pet, resp)=>{
    resp.render('mod_odo')
}

export const busc_odo = (pet, resp)=>{
    resp.render('busc_odo' , {federico: false})
}




export const nuevo_odo = async (pet, resp) => {

    let id, nombre, apellido, esp, cons;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    apellido = pet.body.apellido;
    esp = pet.body.especialidad;
    cons = pet.body.idCons;

    try {

        let altasql = "INSERT INTO odontologo (idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio) VALUES ('" + id + "', '" + nombre + "', '" + apellido + "', '" + esp + "', '" + cons + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_odo', {
            guardado: true,
            alert: true,
            msj: 'Odontologo Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_odo', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el odontologo.'
        });
    }
};


export const mos_odo = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo ORDER BY idodontologo;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_odo', { registros });
    } catch (error) {
        console.log("No puede mostrar los odontologos");
    }
}


export const buscodo_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE idodontologo = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_odo', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar el odontologo:', error);
    }
}