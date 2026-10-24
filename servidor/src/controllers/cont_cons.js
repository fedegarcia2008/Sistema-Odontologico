import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_cons = (pet, resp)=>{
    resp.render('menu_cons')
}

export const alta_cons = (pet, resp)=>{
    resp.render('alta_cons', {alert: false})
}

export const baja_cons = (pet, resp)=>{
    resp.render('baja_cons', {cargado: false})
}

export const mod_cons = (pet, resp)=>{
    resp.render('mod_cons', {alert: false, cargado: false})
}

export const busc_cons = (pet, resp)=>{
    resp.render('busc_cons', {cargadoid: false, cargadotabla: false,})
}


export const nuevo_cons = async (pet, resp) => {
  console.log(pet.body);
    let id, nro, local;
    id = pet.body.clave;
    nro = pet.body.nCons;
    local = pet.body.idLocal;

    try {

        let altasql = "INSERT INTO consultorio (idconsultorio, numero, local_idlocal) VALUES ('" + id + "', '" + nro + "', '" + local + "');";

         const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_cons', {
            guardado: true,
            alert: true,
            msj: 'Consulta Guardada',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_cons', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar la consulta.'
        });
    }
};


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


//para buscar
export const buscons_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE idconsultorio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_cons', { busc_registros, cargadoid: true, cargadotabla: false, });
    }     catch (error) {
        console.error('Error al buscar consultorio:', error);
    }
}

export const buscons_nrocons = async (pet, resp)=>{
      let nro = pet.params.cons;
      try {
        let buscarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE numero = '"+ nro +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_cons', { busc_registros, cargadoid: true, cargadotabla: false, });
    }     catch (error) {
        console.error('Error al buscar consultorio:', error);
    }
}

// para modificar
export const modcons_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE idconsultorio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('mod_cons', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar el consultorio:', error);
    }
};

export const modificar_cons = async (pet, resp)=>{
       let id, nro, local;
    id = pet.body.clave;
    nro = pet.body.nCons;
    local = pet.body.idLocal;

      try {
        let modificarsql = "UPDATE consultorio SET numero = '"+ nro +"' WHERE idconsultorio = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
 resp.render('mod_cons', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Consultorio Modificado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar consultorio:', error);
        resp.render('mod_cons', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar el consultorio'
        });
    }
};


// para borrar
export const  bajacons_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE idconsultorio = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('baja_cons', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar el consultorio:', error);
    }
}

export const eliminar_cons = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM consultorio WHERE idconsultorio = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('baja_cons', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar consultorio:', error);
    }
}
  