import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_hor = (pet, resp)=>{
    resp.render('menu_hor')
}

export const alta_hor = (pet, resp)=>{
    resp.render('alta_hor')
}

export const baja_hor = (pet, resp)=>{
    resp.render('baja_hor')
}

export const mod_hor = (pet, resp)=>{
    resp.render('mod_hor')
}

export const busc_hor = (pet, resp)=>{
    resp.render('busc_hor', {federico: false})
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
        resp.render('alta_hor', {
            guardado: true,
            alert: true,
            msj: 'Horario Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_hor', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el horario.'
        });
    }
};


export const mos_hor = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idhorario, dia, horario_comienzo, horario_final, odontologo_idodontologo FROM horario ORDER BY idhorario;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_hor', { registros });
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
    resp.render('busc_hor', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar horario:', error);
    }
}