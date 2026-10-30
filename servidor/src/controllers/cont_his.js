import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_his = (pet, resp)=>{
    resp.render('menu_his')
}

export const alta_his = (pet, resp)=>{
    resp.render('altas/alta_his', {alert: false})
}

export const baja_his = (pet, resp)=>{
    resp.render('bajas/baja_his', {cargado: false})
}

export const mod_his = (pet, resp)=>{
    resp.render('modificar/mod_his', {alert: false, cargado: false})
}

export const busc_his = (pet, resp)=>{
    resp.render('buscar/busc_his', {alert: false, cargadoid: false, cargadotabla: false,})
}




export const nuevo_his = async (pet, resp) => {

    let id, fecha, trat, ser, afi, odo, tur;

    id = pet.body.clave;
    fecha = pet.body.fecha;
    trat = pet.body.idTrat;
    ser = pet.body.idSer;
    afi = pet.body.idAfi;
    odo = pet.body.idOdo;
    tur = pet.body.idTur;

    try {

        let altasql = "INSERT INTO tratamiento_realizado (idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta) VALUES ('" + id + "', '" + fecha + "', '" + trat + "', '" + ser + "', '" + afi + "', '" + odo + "', '" + tur + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_his', {
            alert: true,
            icono: 'success',
            msj: 'HISTORIA CLÍNICA GUARDADA',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_his', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR LA HISTORIA CLÍNICA',
            tiempo: 1500,
        });
    }
};


export const mos_his = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado ORDER BY idtratamiento_realizado;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_his', { registros });
    } catch (error) {
        console.log("No puede mostrar las historias clinicas");
    }
}


export const buschis_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE idtratamiento_realizado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clínica:', error);
        resp.render('buscar/busc_his', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA HSITORIA CLÍNICA',
            tiempo: 2000,
        });
    }
};


    export const buschis_fecha = async (pet, resp)=>{
          let fecha = pet.params.fecha;
          
          try {
            let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento,  afiliado_ci_afiliado , odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE fecha_inicio = '"+ fecha +"'" ;
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESA FECHA'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clínica:', error);
        resp.render('buscar/busc_his', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA HSITORIA CLÍNICA',
            tiempo: 2000,
        });
    }
};

        
        export const buschis_afi = async (pet, resp)=>{
              let afi = pet.params.idAfi;
              try {
                let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE afiliado_ci_afiliado = '"+ afi +"'";
                const [busc_registros] = await bdd.query(buscarsql);
                console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clínica:', error);
        resp.render('buscar/busc_his', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA HSITORIA CLÍNICA',
            tiempo: 2000,
        });
    }
};

        
        export const buschis_odo = async (pet, resp)=>{
              let odo = pet.params.idOdo;
              try {
                let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE odontologo_idodontologo = '"+ odo +"'";
                const [busc_registros] = await bdd.query(buscarsql);
                console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clínica:', error);
        resp.render('buscar/busc_his', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA HSITORIA CLÍNICA',
            tiempo: 2000,
        });
    }
};

        export const buschis_trat = async (pet, resp)=>{
              let trat = pet.params.trat_rea;
              try {
                let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE tratamiento_finalizado = '"+ trat +"'";
                const [busc_registros] = await bdd.query(buscarsql);
                console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_his', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ESTADO'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clínica:', error);
        resp.render('buscar/busc_his', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR LA HSITORIA CLÍNICA',
            tiempo: 2000,
        });
    }
};

        


// para modificar
export const  modhis_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idtratamiento_realizado, DATE_FORMAT(fecha_inicio, '%Y-%m-%d') AS fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE idtratamiento_realizado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_his', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_his', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clinica:', error);
        resp.render('modificar/mod_his', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR LA HISTORIA CLÍNICA'
        });
    }
};


export const  modhis_afi = async (pet, resp)=>{
let afi = pet.params.idAfi;
      try {
        let buscsql = "SELECT idtratamiento_realizado, DATE_FORMAT(fecha_inicio, '%Y-%m-%d') AS fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE afiliado_ci_afiliado = '"+ afi +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_his', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA ENCONTRADA',
                tiempo: 2000,
            });
        } else {
            resp.render('modificar/mod_his', {
                busc_registros,
                cargado: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUNA HISTORIA CLÍNICA CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar historia clinica:', error);
        resp.render('modificar/mod_his', {
            cargado: true,
            alert: true,
            icono: 'false',
            msj: 'ERROR AL BUSCAR LA HISTORIA CLÍNICA'
        });
    }
};

export const modificar_his = async (pet, resp)=>{
    
    let id, fecha, trat, ser, afi, odo, tur;

    id = pet.body.clave;
    fecha = pet.body.fecha;
    trat = pet.body.idTrat;
    ser = pet.body.idSer;
    afi = pet.body.idAfi;
    odo = pet.body.idOdo;
    tur = pet.body.idTur;

      try {
        let modificarsql = "UPDATE tratamiento_realizado SET fecha_inicio = '"+ fecha +"', tratamiento_finalizado = '"+ trat+"' WHERE idtratamiento_realizado = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
            resp.render('modificar/mod_his', {
                modificar_registros,
                cargado: false,
                alert: true,
                icono: 'success',
                msj: 'HISTORIA CLÍNICA MODIFICADA',
                tiempo: 2000,
            });
     
    } catch (error) {
        console.error('Error al modificar la historia clínica:', error);
    
        resp.render('modificar/mod_his', {
         
            cargado: false,
            alert: true,
            icono: 'error',
            msj: 'ERROR AL MODIFICAR LA HISTORIA CLÍNICA',
            tiempo: 2000,
        });
    }
};


// para borrar
export const  bajahis_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE idtratamiento_realizado = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_his', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar historia clinica:', error);
    }
}

export const  bajahis_afi = async (pet, resp)=>{
let afi = pet.params.idAfi;
      try {
        let bajasql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE afiliado_ci_afiliado = '"+ afi +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_his', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar historia clinica:', error);
    }
}

export const eliminar_his = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM tratamiento_realizado WHERE idtratamiento_realizado = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('bajas/baja_his', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar historia clinica:', error);
    }
}