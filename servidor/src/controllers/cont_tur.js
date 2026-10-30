import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_tur = (pet, resp)=>{
    resp.render('menu_tur')
}

export const alta_tur = (pet, resp)=>{
    resp.render('altas/alta_tur', {alert: false})
}

export const baja_tur = (pet, resp)=>{
    resp.render('bajas/baja_tur', {cargado: false})
}

export const mod_tur = (pet, resp)=>{
    resp.render('modificar/mod_tur', {alert: false, cargado: false})
}

export const busc_tur = (pet, resp)=>{
    resp.render('buscar/busc_tur', {alert: false, cargadoid: false, cargadotabla: false,})
}



export const nuevo_tur = async (pet, resp) => {

    let fecha, hora, odo, afi;

    fecha = pet.body.fecha;
    hora = pet.body.hora;
    odo = pet.body.idOdo;
    afi = pet.body.idAfi;

    try {

        let altasql = "INSERT INTO consulta (fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado) VALUES ('" + fecha + "', '" + hora + "', '" + odo + "',  '" + afi + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_tur', {
            alert: true,
            icono: 'success',
            msj: 'TURNO GUARDADO',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_tur', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL TURNO',
            tiempo: 1500,
        });
    }
};


export const mos_tur = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta ORDER BY idconsulta;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_tur', { registros });
    } catch (error) {
        console.log("No puede mostrar las consultas");
    }
}

// para buscar
export const busctur_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE idconsulta = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('buscar/busc_tur', { busc_registros, cargadoid: true, cargadotabla: false, });
    }     catch (error) {
        console.error('Error al buscar el turno:', error);
    }
}

    export const busctur_fecha = async (pet, resp)=>{
          let fecha = pet.params.fecha;
          
          try {
            let buscarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo,  afiliado_ci_afiliado FROM consulta WHERE fecha = '"+ fecha +"'" ;
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        resp.render('buscar/busc_tur', { busc_registros, cargadoid: false, cargadotabla: true, });
        }     catch (error) {
            console.error('Error al buscar turno:', error);
        }
    }

    export const busctur_fechas = async (pet, resp)=>{
          let fecha1 = pet.params.fecha1;
          let fecha2 = pet.params.fecha2;
          
          try {
           let buscarsql =  "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE fecha BETWEEN '" + fecha1 + "' AND '" + fecha2 + "' ORDER BY fecha, horario";
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        resp.render('buscar/busc_tur', { busc_registros, cargadoid: false, cargadotabla: true, });
        }     catch (error) {
            console.error('Error al buscar turno:', error);
        }
    }
    
export const busctur_odo = async (pet, resp)=>{
      let odo = pet.params.idOdo;
      try {
        let buscarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE odontologo_idodontologo = '"+ odo +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('buscar/busc_tur', { busc_registros, cargadoid: false, cargadotabla: true, });
    }     catch (error) {
        console.error('Error al buscar el turno:', error);
    }
}

export const busctur_afi = async (pet, resp)=>{
      let afi = pet.params.idAfi;
      try {
        let buscarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE afiliado_ci_afiliado = '"+ afi +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('buscar/busc_tur', { busc_registros, cargadoid: true, cargadotabla: false, });
    }     catch (error) {
        console.error('Error al buscar el turno:', error);
    }
}

// para modificar
export const  modtur_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idconsulta, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE idconsulta = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_tur', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'TURNO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_tur', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN TURNO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar turno:', error);
        resp.render('modificar/mod_tur', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL TURNO'
        });
    }
};


 export const modtur_fechas = async (pet, resp)=>{
          let fecha1 = pet.params.fecha1;
          let fecha2 = pet.params.fecha2;
          
          try {
           let buscsql =  "SELECT idconsulta, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE fecha BETWEEN '" + fecha1 + "' AND '" + fecha2 + "' ORDER BY fecha, horario"; //mostrar bien las fechas
            const [busc_registros] = await bdd.query(buscsql);
            console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_tur', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'TURNO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_tur', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN TURNO CON PARA ESE PERÍODO'
            });
        }
    } catch (error) {
        console.error('Error al buscar turno:', error);
        resp.render('modificar/mod_tur', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL TURNO'
        });
    }
};


export const modificar_tur = async (pet, resp)=>{
    
    let id, fecha, hora, odo, afi;
id = pet.body.clave;
    fecha = pet.body.fecha;
    hora = pet.body.hora;
    odo = pet.body.idOdo;
    afi = pet.body.idAfi;


      try {
        let modificarsql = "UPDATE consulta SET fecha = '"+ fecha +"', horario = '"+ hora+"', odontologo_idodontologo = '"+ odo +"', afiliado_ci_afiliado = '"+ afi +"'  WHERE idconsulta = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
            resp.render('modificar/mod_tur', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'TURNO MODIFICADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar turno:', error);
    
        resp.render('modificar/mod_tur', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR EL TURNO',
            tiempo: 2000,
        });
    }
};

// para borrar
export const  bajatur_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idconsulta, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha , horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE idconsulta = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_tur', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'TURNO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_tur', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN TURNO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar turno:', error);
        resp.render('bajas/baja_tur', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL TURNO'
        });
    }
};

export const  bajatur_fechas = async (pet, resp)=>{
            let fecha1 = pet.params.fecha1;
            let fecha2 = pet.params.fecha2;
      try {
        let bajasql = "SELECT idconsulta, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha , horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE fecha BETWEEN '" + fecha1 + "' AND '" + fecha2 + "' ORDER BY fecha, horario";;
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
        if (baja_registros.length > 0) {
            resp.render('bajas/baja_tur', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'TURNO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('bajas/baja_tur', {
                baja_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN TURNO CON ESE PERÍODO'
            });
        }
    } catch (error) {
        console.error('Error al buscar turno:', error);
        resp.render('bajas/baja_tur', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR EL TURNO'
        });
    }
};

export const eliminar_tur = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM consulta WHERE idconsulta = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
            resp.render('bajas/baja_tur', {
                baja_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'TURNO ELIMINADO',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al eliminar turno:', error);
    
        resp.render('bajas/baja_tur', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL ELIMINAR EL TURNO',
            tiempo: 2000,
        });
    }
};