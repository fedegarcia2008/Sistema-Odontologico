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
    resp.render('buscar/busc_tur', { cargadoid: false, cargadotabla: false,})
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
resp.render('modificar/mod_tur', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar la consulta:', error);
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
 resp.render('mod_tur', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Turno Modificado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar consulta:', error);
        resp.render('mod_tur', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar la consulta'
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
        resp.render('modificar/mod_tur', { busc_registros,  cargado: true });
        }     catch (error) {
            console.error('Error al buscar turno:', error);
        }
    }



// para borrar
export const  bajatur_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idconsulta, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha , horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE idconsulta = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_tur', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar turno:', error);
    }
}

export const  bajatur_fechas = async (pet, resp)=>{
            let fecha1 = pet.params.fecha1;
            let fecha2 = pet.params.fecha2;
      try {
        let bajasql = "SELECT idconsulta, DATE_FORMAT(fecha, '%Y-%m-%d') AS fecha , horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE fecha BETWEEN '" + fecha1 + "' AND '" + fecha2 + "' ORDER BY fecha, horario";;
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_tur', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar turno:', error);
    }
}

export const eliminar_tur = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM consulta WHERE idconsulta = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('bajas/baja_tur', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar turno:', error);
    }
}