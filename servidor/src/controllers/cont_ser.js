import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_ser = (pet, resp)=>{
    resp.render('menu_ser')
}

export const alta_ser = (pet, resp)=>{
    resp.render('altas/alta_ser', {alert: false})
}

export const baja_ser = (pet, resp)=>{
    resp.render('bajas/baja_ser', {alert: false, cargado: false})
}

export const mod_ser = (pet, resp)=>{
    resp.render('modificar/mod_ser', {alert: false, cargado: false})
}

export const busc_ser = (pet, resp)=>{
    resp.render('buscar/busc_ser', {alert: false, cargadoid: false, cargadotabla: false, })
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
        resp.render('altas/alta_ser', {
            alert: true,
            icono: 'success',
            msj: 'SERVICIO GUARDADO',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_ser', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL SERVICIO',
            tiempo: 1500,
        });
    }
};


export const mos_ser = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento ORDER BY idtratamiento;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_ser', { registros });
    } catch (error) {
        console.log("No puede mostrar los tratamientos");
    }
}


// para buscar
export const buscser_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE idtratamiento = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_ser', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_ser', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('buscar/busc_ser', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL SERVICIO',
            tiempo: 2000,
        });
    }
};

export const buscser_nom = async (pet, resp)=>{
      let nombre = pet.params.nom;
      try {
        let buscarsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE nombre = '"+ nombre +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_ser', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_ser', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('buscar/busc_ser', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL SERVICIO',
            tiempo: 2000,
        });
    }
};

export const buscser_odo = async (pet, resp)=>{
      let odo = pet.params.odo;
      try {
        let buscarsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE odontologo_idodontologo = '"+ odo +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_ser', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_ser', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('buscar/busc_ser', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL SERVICIO',
            tiempo: 2000,
        });
    }
};


// para modificar
export const modser_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE idtratamiento = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_ser', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_ser', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('modificar/mod_ser', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL SERVICIO'
        });
    }
};

export const modser_nom = async (pet, resp)=>{
let nom = pet.params.nom;
      try {
        let buscsql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE nombre = '"+ nom +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_ser', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_ser', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('modificar/mod_ser', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL SERVICIO'
        });
    }
};

export const modificar_ser = async (pet, resp)=>{
      let id, nombre, costo, odo;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    costo = pet.body.costo;
    odo = pet.body.idOdo;

      try {
        let modificarsql = "UPDATE tratamiento SET nombre = '"+ nombre +"', costo = '"+ costo+"' WHERE idtratamiento = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
            resp.render('modificar/mod_ser', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO MODIFICADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar servicio:', error);
    
        resp.render('modificar/mod_ser', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR EL SERVICIO',
            tiempo: 2000,
        });
    }
};


// para borrar
export const  bajaser_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE idtratamiento = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_ser', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_ser', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('bajas/baja_ser', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL SERVICIO'
        });
    }
};

export const  bajaser_nom = async (pet, resp)=>{
let nom = pet.params.nombre;
      try {
        let bajasql = "SELECT idtratamiento, nombre, costo, odontologo_idodontologo FROM tratamiento WHERE nombre = '"+ nom +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_ser', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_ser', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN SERVICIO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar servicio:', error);
        resp.render('bajas/baja_ser', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL SERVICIO'
        });
    }
};

export const eliminar_ser = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM tratamiento WHERE idtratamiento = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
            resp.render('bajas/baja_ser', {
                baja_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'SERVICIO ELIMINADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al eliminar servicio:', error);
    
        resp.render('bajas/baja_ser', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL ELIMINAR EL SERVICIO',
            tiempo: 2000,
        });
    }
};