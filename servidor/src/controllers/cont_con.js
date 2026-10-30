import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_con = (pet, resp)=>{
    resp.render('menu_con')
}

export const alta_con = (pet, resp)=>{
    resp.render('altas/alta_con', {alert: false})
}

export const baja_con = (pet, resp)=>{
    resp.render('bajas/baja_con', {alert: false, cargado: false})
}

export const mod_con = (pet, resp)=>{
    resp.render('modificar/mod_con', {alert: false, cargado: false} )
}

export const busc_con = (pet, resp)=>{
    resp.render('buscar/busc_con', {alert: false, cargadoid: false, cargadotabla: false,})
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
        resp.render('altas/alta_con', {
            alert: true,
            icono: 'success',
            msj: 'CONVENIO GUARDADO',
            tiempo: 2000,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_con', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL CONVENIO',
            tiempo: 2000,
        });
    }
};


export const mos_con = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconvenio, nombre, rebaja FROM convenio ORDER BY idconvenio;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_con', { registros });
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
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_con', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_con', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONVENIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar convenio:', error);
        resp.render('buscar/busc_con', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL CONVENIO',
            tiempo: 2000,
        });
    }
};

export const buscon_nom = async (pet, resp)=>{
      let nom = pet.params.nombre;
      try {
        let buscarsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE nombre = '"+ nom +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_con', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_con', {
                busc_registros,
             
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONVENIO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar convenio:', error);
        resp.render('buscar/busc_con', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL CONVENIO',
            tiempo: 2000,
        });
    }
};



// para modificar
export const  modcon_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE idconvenio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_con', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_con', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONVENIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar convenio:', error);
        resp.render('modificar/mod_con', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL CONVENIO'
        });
    }
};

export const modcon_nom = async (pet, resp)=>{
let nom = pet.params.nombre;
      try {
        let buscsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE nombre = '"+ nom +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_con', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_con', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONVENIO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar convenio:', error);
        resp.render('modificar/mod_con', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL CONVENIO'
        });
    }
};

export const modificar_con = async (pet, resp)=>{
     let id, nombre, rebaja;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    rebaja = pet.body.rebaja;

      try {
        let modificarsql = "UPDATE convenio SET nombre = '"+ nombre +"', rebaja = '"+ rebaja+"' WHERE idconvenio = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
            resp.render('modificar/mod_con', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO MODIFICADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar convenio:', error);
    
        resp.render('modificar/mod_con', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR EL CONVENIO',
            tiempo: 2000,
        });
    }
};


// para borrar
export const  bajacon_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE idconvenio = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_con', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_con', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONVENIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar convenio:', error);
        resp.render('bajas/baja_con', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL CONVENIO'
        });
    }
};

export const bajacon_nom = async (pet, resp)=>{
let nom = pet.params.nombre;
      try {
        let bajasql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE nombre = '"+ nom +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_con', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_con', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN CONVENIO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar convenio:', error);
        resp.render('bajas/baja_con', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL CONVENIO'
        });
    }
};

export const eliminar_con = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM convenio WHERE idconvenio = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
            resp.render('bajas/baja_con', {
                baja_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'CONVENIO ELIMINADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al eliminar convenio:', error);
    
        resp.render('bajas/baja_con', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL ELIMINAR EL CONVENIO',
            tiempo: 2000,
        });
    }
};