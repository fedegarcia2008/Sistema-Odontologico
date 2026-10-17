import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_his = (pet, resp)=>{
    resp.render('menu_his')
}

export const alta_his = (pet, resp)=>{
    resp.render('alta_his')
}

export const baja_his = (pet, resp)=>{
    resp.render('baja_his')
}

export const mod_his = (pet, resp)=>{
    resp.render('mod_his')
}

export const busc_his = (pet, resp)=>{
    resp.render('busc_his', {federico: false})
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
        resp.render('alta_his')
    } catch (Error) {
        console.log('Error, en la sentencia INSERT');
        console.log(Error)
    }
}


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


export const buscafi_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idtratamiento_realizado, fecha_inicio, tratamiento_finalizado, tratamiento_idtratamiento, afiliado_ci_afiliado, odontologo_idodontologo, consulta_idconsulta FROM tratamiento_realizado ORDER BY idtratamiento_realizado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_afi', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar historia clinica:', error);
    }
}