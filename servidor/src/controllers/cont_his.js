import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_his = (pet, resp)=>{
    resp.render('menu_his')
}

export const alta_his = (pet, resp)=>{
    resp.render('alta_his', {alert: false})
}

export const baja_his = (pet, resp)=>{
    resp.render('baja_his')
}

export const mod_his = (pet, resp)=>{
    resp.render('mod_his', {alert: false, cargado: false})
}

export const busc_his = (pet, resp)=>{
    resp.render('busc_his', {cargado: false})
}




export const nuevo_his = async (pet, resp) => {

    let fecha, trat, ser, afi, odo, tur;

    fecha = pet.body.fecha;
    trat = pet.body.idTrat;
    ser = pet.body.idSer;
    afi = pet.body.idAfi;
    odo = pet.body.idOdo;
    tur = pet.body.idTur;

    try {

        let altasql = "INSERT INTO tratamiento_realizado (fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta) VALUES ('" + fecha + "', '" + trat + "', '" + ser + "', '" + afi + "', '" + odo + "', '" + tur + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_his', {
            guardado: true,
            alert: true,
            msj: 'Historia Clinica Guardada',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_his', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar la historia clinica.'
        });
    }
};


export const mos_his = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado ORDER BY idtratamiento_realizado;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_his', { registros });
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
    resp.render('busc_his', { busc_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar historia clinica:', error);
    }
}


    export const buschis_fecha = async (pet, resp)=>{
          let fecha = pet.params.fecha;
          
          try {
            let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento,  afiliado_ci_afiliado , odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE fecha_inicio = '"+ fecha +"'" ;
            const [busc_registros] = await bdd.query(buscarsql);
            console.log(busc_registros)
        resp.render('busc_his', { busc_registros, cargado: true });
        }     catch (error) {
            console.error('Error al buscar turno:', error);
        }
    }

        
        export const buschis_afi = async (pet, resp)=>{
              let afi = pet.params.idAfi;
              try {
                let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE afiliado_ci_afiliado = '"+ afi +"'";
                const [busc_registros] = await bdd.query(buscarsql);
                console.log(busc_registros)
            resp.render('busc_his', { busc_registros, cargado: true });
            }     catch (error) {
                console.error('Error al buscar la consulta:', error);
            }
        }

        
        export const buschis_odo = async (pet, resp)=>{
              let odo = pet.params.idOdo;
              try {
                let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE odontologo_idodontologo = '"+ odo +"'";
                const [busc_registros] = await bdd.query(buscarsql);
                console.log(busc_registros)
            resp.render('busc_his', { busc_registros, cargado: true });
            }     catch (error) {
                console.error('Error al buscar la consulta:', error);
            }
        }

        export const buschis_trat = async (pet, resp)=>{
              let trat = pet.params.trat_rea;
              try {
                let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE tratamiento_finalizado = '"+ trat_rea +"'";
                const [busc_registros] = await bdd.query(buscarsql);
                console.log(busc_registros)
            resp.render('busc_his', { busc_registros, cargado: true });
            }     catch (error) {
                console.error('Error al buscar la consulta:', error);
            }
        }

        


// para modificar
export const  modhis_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado WHERE idtratamiento_realizado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('mod_his', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar la historia clinica:', error);
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
 resp.render('mod_his', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Historia Clinica Modificada',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar la historia clinica:', error);
        resp.render('mod_his', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar la historia clinica'
        });
    }
};