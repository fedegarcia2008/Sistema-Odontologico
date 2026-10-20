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
    resp.render('busc_equi' , {federico: false})
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
        resp.render('alta_equi', {
            guardado: true,
            alert: true,
            msj: 'Equipamiento Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_equi', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el equipamiento.'
        });
    }
};


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


export const buscequi_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT nroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE nroserie= '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_equi', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar el equipamiento:', error);
    }
}