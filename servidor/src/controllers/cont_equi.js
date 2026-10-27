import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_equi = (pet, resp)=>{
    resp.render('menu_equi')
}

export const alta_equi = (pet, resp)=>{
    resp.render('altas/alta_equi', {alert: false})
}

export const baja_equi = (pet, resp)=>{
    resp.render('baja_equi', {cargado: false})
}

export const mod_equi = (pet, resp)=>{
    resp.render('mod_equi' , {alert: false, cargado: false})
}

export const busc_equi = (pet, resp)=>{
    resp.render('busc_equi' , {cargadoid: false, cargadotabla: false})
}



export const nuevo_equi = async (pet, resp) => {

    let id, tipo, fecha, cons;

    id = pet.body.clave;
    tipo = pet.body.tipo;
    fecha = pet.body.fecha;
    cons = pet.body.idCons;
    try {

        let altasql = "INSERT INTO equipamiento (nroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio) VALUES ('" + id + "', '" + tipo + "', '" + fecha + "', '" + cons + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_equi', {
            guardado: true,
            alert: true,
            msj: 'Equipamiento Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_equi', {
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
        resp.render('mostrar/mos_equi', { registros });
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
    resp.render('busc_equi', { busc_registros, cargadoid: true, cargadotabla: false });
    }     catch (error) {
        console.error('Error al buscar el numero de serie:', error);
    }
}


    export const buscequi_fecha = async (pet, resp)=>{
          let fecha = pet.params.fecha;
          
          try {
            let buscarsql = "SELECT nroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE fecha_mantenimiento = '"+ fecha +"'" ;
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        resp.render('busc_equi', { busc_registros, cargadotabla: true, cargadoid: false });
        }     catch (error) {
            console.error('Error al buscar equipamiento:', error);
        }
    }

     export const buscequi_cons = async (pet, resp)=>{
          let cons = pet.params.idCons;
          
          try {
            let buscarsql = "SELECT nroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE consultorio_idconsultorio = '"+ cons +"'" ;
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        resp.render('busc_equi', { busc_registros, cargadotabla: true, cargadoid: false });
        }     catch (error) {
            console.error('Error al buscar consultorio:', error);
        }
    }

    export const buscequi_tipo = async (pet, resp)=>{
          let tipo = pet.params.tipo;
          
          try {
            let buscarsql = "SELECT nroserie, tipo, fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE tipo = '"+ tipo +"'" ;
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        resp.render('busc_equi', { busc_registros, cargadotabla: true, cargadoid: false });
        }     catch (error) {
            console.error('Error al buscar tipo de equipamiento:', error);
        }
    }

// para modificar
export const  modequi_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT nroserie, tipo, DATE_FORMAT(fecha_mantenimiento, '%Y-%m-%d') AS fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE nroserie= '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('mod_equi', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar el equipamiento:', error);
    }
};

export const  modequi_tipo = async (pet, resp)=>{
let tipo = pet.params.tipo;
      try {
        let buscsql = "SELECT nroserie, tipo, DATE_FORMAT(fecha_mantenimiento, '%Y-%m-%d') AS fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE tipo= '"+ tipo +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('mod_equi', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar el equipamiento:', error);
    }
};


export const modificar_equi = async (pet, resp)=>{

      let id, tipo, fecha;

    id = pet.body.clave;
    tipo = pet.body.tipo;
    fecha = pet.body.fecha;
   

      try {
        let modificarsql = "UPDATE equipamiento SET tipo = '"+ tipo +"', fecha_mantenimiento = '"+ fecha+"' WHERE nroserie = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
 resp.render('mod_equi', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Equipamiento Modificado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar el equipamiento:', error);
        resp.render('mod_equi', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar el equipamiento'
        });
    }
};


// para borrar
export const  bajaequi_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT nroserie, tipo, DATE_FORMAT(fecha_mantenimiento, '%Y-%m-%d') AS fecha_mantenimiento, consultorio_idconsultorio FROM equipamiento WHERE nroserie= '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('baja_equi', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar equipamiento:', error);
    }
}

export const  bajaequi_tipo = async (pet, resp)=>{
let tipo = pet.params.tipo;
      try {
        let bajasql = "SELECT nroserie, tipo, DATE_FORMAT(fecha_mantenimiento, '%Y-%m-%d') AS fecha_mantenimiento , consultorio_idconsultorio FROM equipamiento WHERE tipo= '"+ tipo +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('baja_equi', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar equipamiento:', error);
    }
}

export const eliminar_equi = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM equipamiento WHERE nroserie = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('baja_equi', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar equipaiento:', error);
    }
}