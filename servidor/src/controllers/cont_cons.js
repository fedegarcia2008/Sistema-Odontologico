import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_cons = (pet, resp)=>{
    resp.render('menu_cons')
}

export const alta_cons = (pet, resp)=>{
    resp.render('altas/alta_cons', {alert: false})
}

export const baja_cons = (pet, resp)=>{
    resp.render('bajas/baja_cons', {cargado: false})
}

export const mod_cons = (pet, resp)=>{
    resp.render('modificar/mod_cons', {alert: false, cargado: false})
}

export const busc_cons = (pet, resp)=>{
    resp.render('buscar/busc_cons', {alert: false, cargadoid: false, cargadotabla: false,})
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
        resp.render('altas/alta_cons', {
            alert: true,
            icono: 'success',
            msj: 'CONSULTORIO GUARDADO',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_cons', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL CONSULTORIO',
            tiempo: 1500,
        });
    }
};


export const mos_cons = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio ORDER BY idconsultorio;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_cons', { registros });
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
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_cons', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'CONSULTORIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_cons', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONSULTORIO CON ESE NÚMERO'
            });
        }
    } catch (error) {
        console.error('Error al buscar consultorio:', error);
        resp.render('buscar/busc_cons', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL CONSULTORIO',
            tiempo: 2000,
        });
    }
};

export const buscons_nrocons = async (pet, resp)=>{
      let nro = pet.params.cons;
      try {
        let buscarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE numero = '"+ nro +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('buscar/busc_cons', { busc_registros, cargadoid: true, cargadotabla: false, });
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
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_cons', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CONSULTORIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_cons', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONSULTORIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar consultorio:', error);
        resp.render('modificar/mod_cons', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL CONSULTORIO'
        });
    }
};

export const modcons_num = async (pet, resp)=>{
let num = pet.params.num;
      try {
        let buscsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE numero= '"+ num +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_cons', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CONSULTORIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_cons', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONSULTORIO CON ESE NÚMERO'
            });
        }
    } catch (error) {
        console.error('Error al buscar consultorio:', error);
        resp.render('modificar/mod_cons', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL CONSULTORIO'
        });
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
            resp.render('modificar/mod_cons', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'CONSULTORIO MODIFICADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar consultorio:', error);
    
        resp.render('modificar/mod_cons', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR EL CONSULTORIO',
            tiempo: 2000,
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
    resp.render('bajas/baja_cons', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar el consultorio:', error);
    }
}

export const  bajacons_num = async (pet, resp)=>{
let num = pet.params.num;
      try {
        let bajasql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE numero = '"+ num +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_cons', { baja_registros, cargado: true });
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
    resp.render('bajas/baja_cons', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar consultorio:', error);
    }
}
  