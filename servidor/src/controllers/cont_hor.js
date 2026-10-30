import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_hor = (pet, resp)=>{
    resp.render('menu_hor')
}

export const alta_hor = (pet, resp)=>{
    resp.render('altas/alta_hor', {alert: false})
}

export const baja_hor = (pet, resp)=>{
    resp.render('bajas/baja_hor', {alert: false, cargado: false})
}

export const mod_hor = (pet, resp)=>{
    resp.render('modificar/mod_hor', {alert: false, cargado: false})
}

export const busc_hor = (pet, resp)=>{
    resp.render('buscar/busc_hor', {alert: false, cargadoid: false, cargadotabla: false,})
}



export const nuevo_hor = async (pet, resp) => {

    let dia , inicio, final, odo;

    dia = pet.body.dia;
    inicio = pet.body.horaIn;
    final = pet.body.horaFi;
    odo = pet.body.idOdo;

    try {

        let altasql = "INSERT INTO horario (dia, horario_comienzo, horario_final, odontologo_idodontologo) VALUES ('" + dia + "', '" + inicio + "', '" + final + "',  '" + odo + "');";

       const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_hor', {
            alert: true,
            icono: 'success',
            msj: 'HORARIO GUARDADO',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_hor', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL HORARIO',
            tiempo: 1500,
        });
    }
};


export const mos_hor = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario ORDER BY idhorario;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_hor', { registros });
    } catch (error) {
        console.log("No puede mostrar los horario");
    }
}

export const buschor_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE idhorario = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_hor', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_hor', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('buscar/busc_hor', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL HORARIO',
            tiempo: 2000,
        });
    }
};

export const buschor_odo = async (pet, resp)=>{
      let odo = pet.params.idOdo;
      try {
        let buscarsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE odontologo_idodontologo = '"+ odo +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_hor', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_hor', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('buscar/busc_hor', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL HORARIO',
            tiempo: 2000,
        });
    }
};


export const buschor_dia = async (pet, resp)=>{
      let dia = pet.params.dia;
      try {
        let buscarsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE dia = '"+ dia +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_hor', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_hor', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE DÍA'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('buscar/busc_hor', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL HORARIO',
            tiempo: 2000,
        });
    }
};

// para modificar
export const  modhor_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE idhorario = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_hor', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_hor', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('modificar/mod_hor', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL HORARIO'
        });
    }
};

export const  modhor_dia = async (pet, resp)=>{
let dia = pet.params.dia;
      try {
        let buscsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE dia = '"+ dia +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_hor', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_hor', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE DÍA'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('modificar/mod_hor', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL HORARIO'
        });
    }
};

export const modificar_hor = async (pet, resp)=>{
     let id, dia , inicio, final, odo;

     id = pet.body.clave;
    dia = pet.body.dia;
    inicio = pet.body.horaIn;
    final = pet.body.horaFi;
    odo = pet.body.idOdo;

      try {
        let modificarsql = "UPDATE horario SET dia = '"+ dia +"', horario_comienzo = '"+ inicio+"',horario_final = '"+ final +"' WHERE idhorario = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
            resp.render('modificar/mod_hor', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'HORARIO MODIFICADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar horario:', error);
    
        resp.render('modificar/mod_hor', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR EL HORARIO',
            tiempo: 2000,
        });
    }
};

// para borrar
export const  bajahor_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE idhorario = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_hor', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_hor', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('bajas/baja_hor', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL HORARIO'
        });
    }
};

export const  bajahor_dia = async (pet, resp)=>{
let dia = pet.params.dia;
      try {
        let bajasql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario WHERE dia = '"+ dia +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_hor', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_hor', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN HORARIO CON ESE DÍA'
            });
        }
    } catch (error) {
        console.error('Error al buscar horario:', error);
        resp.render('bajas/baja_hor', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL HORARIO'
        });
    }
};

export const eliminar_hor = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM horario WHERE idhorario = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
            resp.render('bajas/baja_hor', {
                baja_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'HORARIO ELIMINADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al eliminar convenio:', error);
    
        resp.render('bajas/baja_hor', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL ELIMINAR EL HORARIO',
            tiempo: 2000,
        });
    }
};