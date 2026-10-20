import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_tur = (pet, resp)=>{
    resp.render('menu_tur')
}

export const alta_tur = (pet, resp)=>{
    resp.render('alta_tur')
}

export const baja_tur = (pet, resp)=>{
    resp.render('baja_tur')
}

export const mod_tur = (pet, resp)=>{
    resp.render('mod_tur')
}

export const busc_tur = (pet, resp)=>{
    resp.render('busc_tur', {federico: false})
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
        resp.render('alta_tur', {
            guardado: true,
            alert: true,
            msj: 'Turno Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_tur', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el turno.'
        });
    }
};


export const mos_tur = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta ORDER BY idconsulta;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_tur', { registros });
    } catch (error) {
        console.log("No puede mostrar las consultas");
    }
}

export const busctur_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idconsulta, fecha, horario, odontologo_idodontologo, afiliado_ci_afiliado FROM consulta WHERE idconsulta = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_tur', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar el turno:', error);
    }
}