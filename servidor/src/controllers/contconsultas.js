import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menuconsultas = (pet, resp)=>{
    resp.render('menuconsultas')
}


export const cons1 = (pet, resp)=>{
    resp.render('cons1', {cargado: false})
}

// export const cons2 = (pet, resp)=>{
//     resp.render('cons2', {cargado: false})
// }

export const busc_cons1 = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT a.ci_afiliado, a.nombre, a.apellido, c.idconsulta, c.fecha AS fecha_consulta, c.horario, o.nombre AS odontologo_nombre, o.apellido AS odontologo_apellido, t.nombre AS tratamiento, tr.fecha_inicio, tr.tratamiento_finalizado FROM afiliado a JOIN consulta c ON c.afiliado_ci_afiliado = a.ci_afiliado JOIN odontologo o ON o.idodontologo = c.odontologo_idodontologo LEFT JOIN tratamiento_realizado tr ON tr.consulta_idconsulta = c.idconsulta LEFT JOIN tratamiento t ON t.idtratamiento = tr.tratamiento_idtratamiento WHERE a.ci_afiliado = '"+ id +"' ORDER BY c.fecha, c.horario;"

        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('cons1', { busc_registros, cargado: true});
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}

export const cons2 = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT especialidad, COUNT(*) AS cantidad_odontologos, GROUP_CONCAT( CONCAT(nombre, ' ', apellido) ORDER BY apellido SEPARATOR ', ') AS odontologos FROM odontologo GROUP BY especialidad ORDER BY especialidad;"
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('cons2', { registros });
    } catch (error) {
        console.log("No puede mostrar los odntologos");
    }
}