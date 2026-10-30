import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_cta = (pet, resp)=>{
    resp.render('menu_cta')
}

export const alta_cta = (pet, resp)=>{
    resp.render('altas/alta_cta', {alert: false})
}

export const baja_cta = (pet, resp)=>{
    resp.render('bajas/baja_cta', {alert: false, cargado: false})
}

export const mod_cta = (pet, resp)=>{
    resp.render('modificar/mod_cta', {alert: false, cargado: false})
}

export const busc_cta = (pet, resp)=>{
    resp.render('buscar/busc_cta', {alert: false, cargadoid: false, cargadotabla: false,})
}



export const nuevo_cta = async (pet, resp) => {

    let id, saldo, trat;

    id = pet.body.clave;
    saldo = pet.body.saldo;
    trat = pet.body.idTrat;
   
    try {

        let altasql = "INSERT INTO cta_cte (afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado) VALUES ('" + id + "', '" + saldo + "', '" + trat + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_cta', {
            alert: true,
            icono: 'success',
            msj: 'CUENTA CORRIENTE GUARDADA',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_cta', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR LA CUENTA CORRIENTE',
            tiempo: 1500,
        });
    }
};


export const mos_cta = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte ORDER BY afiliado_ci_afiliado ;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_cta', { registros });
    } catch (error) {
        console.log("No puede mostrar las cta cte");
    }
}


export const buscta_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte WHERE afiliado_ci_afiliado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_cta', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_cta', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESA CI'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('buscar/busc_cta', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE',
            tiempo: 2000,
        });
    }
};

export const buscta_his = async (pet, resp)=>{
      let idhis = pet.params.clavehis;
      try {
        let buscarsql = "SELECT afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte WHERE tratamiento_realizado_idtratamiento_realizado = '"+ idhis +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_cta', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_cta', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('buscar/busc_cta', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE',
            tiempo: 2000,
        });
    }
};


export const buscta_nom = async (pet, resp)=>{
      let nom_completo = pet.params.nombre;
      try {
       let buscarsql = "SELECT afiliado_ci_afiliado, nombre, apellido, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte INNER JOIN afiliado ON ci_afiliado = afiliado_ci_afiliado WHERE CONCAT(apellido, ' ', nombre) LIKE '%" + nom_completo + "%'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
         if (busc_registros.length > 0) {
            resp.render('buscar/busc_cta', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_cta', {
                busc_registros,
             
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA CTA. CTE. CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('buscar/busc_cta', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE',
            tiempo: 2000,
        });
    }
};


// para modificar
export const  modcta_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte WHERE afiliado_ci_afiliado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_cta', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CUANTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_cta', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESE CI'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('modificar/mod_cta', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE'
        });
    }
};

export const modcta_nom = async (pet, resp)=>{
let nom_completo = pet.params.nombre;
      try {
        let buscsql = "SELECT afiliado_ci_afiliado, nombre, apellido, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte INNER JOIN afiliado ON ci_afiliado = afiliado_ci_afiliado WHERE CONCAT(apellido, ' ', nombre) LIKE '%" + nom_completo + "%'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_cta', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CUANTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_cta', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('modificar/mod_cta', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE'
        });
    }
};


export const modificar_cta = async (pet, resp)=>{
     
    let id, saldo, trat;

    id = pet.body.clave;
    saldo = pet.body.saldo;
    trat = pet.body.idTrat;

      try {
        let modificarsql = "UPDATE cta_cte SET saldo = '"+ saldo +"' WHERE afiliado_ci_afiliado = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
            resp.render('modificar/mod_cta', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE MODIFICADA',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar cta cte:', error);
    
        resp.render('modificar/mod_cta', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR LA CUENTA CORRIENTE',
            tiempo: 2000,
        });
    }
};



// para borrar
export const  bajacta_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT afiliado_ci_afiliado, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte WHERE afiliado_ci_afiliado = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_cta', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_cta', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESA CI'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('bajas/baja_cta', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE'
        });
    }
};

export const bajacta_nom = async (pet, resp)=>{
let nom_completo = pet.params.nombre;
      try {
        let bajasql = "SELECT afiliado_ci_afiliado, nombre, apellido, saldo, tratamiento_realizado_idtratamiento_realizado FROM cta_cte INNER JOIN afiliado ON ci_afiliado = afiliado_ci_afiliado WHERE CONCAT(apellido, ' ', nombre) LIKE '%" + nom_completo + "%'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_cta', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_cta', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar cta cte:', error);
        resp.render('bajas/baja_cta', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR LA CUENTA CORRIENTE'
        });
    }
};

export const eliminar_cta = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM cta_cte WHERE afiliado_ci_afiliado = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
            resp.render('bajas/baja_cta', {
                baja_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'CUENTA CORRIENTE ELIMINADA',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al eliminar cta cte:', error);
    
        resp.render('bajas/baja_con', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL ELIMINAR LA CUENTA CORRIENTE',
            tiempo: 2000,
        });
    }
};