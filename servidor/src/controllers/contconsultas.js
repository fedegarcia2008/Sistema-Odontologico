import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menuconsultas = (pet, resp)=>{
    resp.render('consultas/menuconsultas')
}


export const cons1 = (pet, resp)=>{
    resp.render('consultas/cons1', {cargado: false, buscoid: false, busconom: false, alert: false})
}

export const cons3 = (pet, resp)=>{
    resp.render('consultas/cons3', {cargado: false})
}

export const cons5 = (pet, resp)=>{
    resp.render('consultas/cons5', {cargado: false})
}

export const cons1_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT a.ci_afiliado, a.nombre, a.apellido, c.idconsulta, c.fecha AS fecha_consulta, c.horario, o.nombre AS odontologo_nombre, o.apellido AS odontologo_apellido, t.nombre AS tratamiento, tr.fecha_inicio, tr.tratamiento_finalizado FROM afiliado a JOIN consulta c ON c.afiliado_ci_afiliado = a.ci_afiliado JOIN odontologo o ON o.idodontologo = c.odontologo_idodontologo LEFT JOIN tratamiento_realizado tr ON tr.consulta_idconsulta = c.idconsulta LEFT JOIN tratamiento t ON t.idtratamiento = tr.tratamiento_idtratamiento WHERE a.ci_afiliado = '"+ id +"' ORDER BY c.fecha, c.horario;"

        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    if (busc_registros.length > 0) {
    resp.render('consultas/cons1', { busc_registros,
        cargado:true,
        buscoid: true, busconom: false,
        alert: true,
        guardado: true,
        msj: 'Afiliado Encontrado',
        tiempo: 1500,
    });
        } else {
    resp.render('consultas/cons1', { busc_registros,
        cargado:true,
        buscoid: true, busconom: false,
        alert: true,
        guardado: false,
        msj: 'Sin Resultados',
        tiempo: 1500,
    });
}
    } catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}

export const cons1_nom = async (pet, resp)=>{
      let nom_completo = pet.params.nombre;
      try {
        let buscarsql = "SELECT a.ci_afiliado, a.nombre, a.apellido, c.idconsulta, c.fecha AS fecha_consulta, c.horario, o.nombre AS odontologo_nombre, o.apellido AS odontologo_apellido, t.nombre AS tratamiento, tr.fecha_inicio, tr.tratamiento_finalizado FROM afiliado a JOIN consulta c ON c.afiliado_ci_afiliado = a.ci_afiliado JOIN odontologo o ON o.idodontologo = c.odontologo_idodontologo LEFT JOIN tratamiento_realizado tr ON tr.consulta_idconsulta = c.idconsulta LEFT JOIN tratamiento t ON t.idtratamiento = tr.tratamiento_idtratamiento WHERE CONCAT (a.apellido,' ', a.nombre) LIKE '%" + nom_completo + "%' ORDER BY c.fecha, c.horario;"

        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
    resp.render('consultas/cons1', { busc_registros,
        cargado:true,
        buscoid: false, busconom: true,
        alert: true,
        guardado: true,
        msj: 'Afiliado Encontrado',
        tiempo: 1500,
    });
        } else {
    resp.render('consultas/cons1', { busc_registros,
        cargado:true,
        buscoid: false, busconom: true,
        alert: true,
        guardado: false,
        msj: 'Sin Resultados',
        tiempo: 1500,
    });
}
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}

export const cons2 = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT especialidad, COUNT(*) AS cantidad_odontologos, GROUP_CONCAT( CONCAT(nombre, ' ', apellido) ORDER BY apellido SEPARATOR ', ') AS odontologos FROM odontologo GROUP BY especialidad ORDER BY especialidad;"
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('consultas/cons2', { registros });
    } catch (error) {
        console.log("No puede mostrar los odntologos");
    }
}

export const busc_cons3 = async (pet, resp)=>{
          let fecha1 = pet.params.fecha1;
          let fecha2 = pet.params.fecha2; 
      try {
        let buscarsql = "SELECT t.idtratamiento, t.nombre, COUNT(tr.idtratamiento_realizado) AS cantidad FROM tratamiento_realizado tr JOIN tratamiento t ON t.idtratamiento = tr.tratamiento_idtratamiento WHERE tr.fecha_inicio BETWEEN '" + fecha1 + "' AND '" + fecha2 + "' GROUP BY t.idtratamiento, t.nombre ORDER BY cantidad DESC LIMIT 1;"

        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('consultas/cons3', { busc_registros, cargado: true});
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}

export const cons4 = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT o.idodontologo, o.nombre, o.apellido, COUNT(tr.idtratamiento_realizado) AS cantidad_tratamientos FROM odontologo o LEFT JOIN tratamiento_realizado tr ON tr.odontologo_idodontologo = o.idodontologo GROUP BY o.idodontologo, o.nombre, o.apellido ORDER BY cantidad_tratamientos DESC;"
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('consultas/cons4', { registros });
    } catch (error) {
        console.log("No puede mostrar los odntologos");
    }
}

export const busc_cons5 = async (pet, resp)=>{
          let fecha1 = pet.params.fecha1;
          let fecha2 = pet.params.fecha2; 
      try {
        let buscarsql = "SELECT SUM(t.costo) AS monto_recaudado FROM tratamiento_realizado tr JOIN tratamiento t ON t.idtratamiento = tr.tratamiento_idtratamiento WHERE tr.fecha_inicio BETWEEN '" + fecha1 + "' AND '" + fecha2 + "';"
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('consultas/cons5', { busc_registros, cargado: true});
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}