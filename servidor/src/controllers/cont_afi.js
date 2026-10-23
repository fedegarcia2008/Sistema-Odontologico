import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_afi = (pet, resp)=>{
    resp.render('menu_afi')
}

export const alta_afi = (pet, resp)=>{
    resp.render('alta_afi', {alert: false})
}

export const baja_afi = (pet, resp)=>{
    resp.render('baja_afi', {federico: false})
}

export const mod_afi = (pet, resp)=>{
    resp.render('mod_afi',  {alert: false, cargado: false} )
}

export const busc_afi = (pet, resp)=>{
    resp.render('busc_afi', {alert: false, cargado: false})
}

/*
export const mos_afi = (pet, resp)=>{
    resp.render('mos_afi')
}
    */

export const nuevo_afi = async (pet, resp) => {

    let id, nombre, apellido, telCel, telFijo, plan;
    id = pet.body.clave;
    nombre = pet.body.nombre;
    apellido = pet.body.apellido;

    // pasar los telefonos a nvarchar
    telCel = parseInt(pet.body.telCelular);
    telCel = isNaN(telCel) ? 'NULL' : telCel;

    telFijo = parseInt(pet.body.telFijo);
    telFijo = isNaN(telFijo) ? 'NULL' : telFijo;


    plan = pet.body.tipo;

    try {

       let altasql = "INSERT INTO afiliado (ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan) VALUES ('" + id + "', '" + nombre + "', '" + apellido + "', " + telCel + ", " + telFijo + ", '" + plan + "');";
 
        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_afi', {
            guardado: true,
            alert: true,
            msj: 'Afiliado Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_afi', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el afiliado.'
        });
    }
};


export const mos_afi = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado ORDER BY ci_afiliado;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_afi', { registros });
    } catch (error) {
        console.log("No puede mostrar los afiliados");
    }
}

// buscar

export const buscafi_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('busc_afi', {
                busc_registros,
                cargado: true,
                alert: true,
                guardado: true,
                msj: 'Afiliado encontrado',
                tiempo: 1500,
                botonConfirma: false
            });
        } else {
            resp.render('busc_afi', {
                busc_registros,
                cargado: true,
                alert: true,
                guardado: false,
                msj: 'No se encontró ningún afiliado con ese id.'
            });
        }
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
        resp.render('busc_afi', {
            cargado: true,
            alert: true,
            guardado: false,
            msj: 'No se pudo buscar el afiliado.'
        });
    }
};

export const buscafi_nom = async (pet, resp)=>{
      let nom_completo = pet.params.nombre;
      
      try {
        let buscarsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE CONCAT (apellido,' ', nombre) LIKE '%" + nom_completo + "%'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('busc_afi', {
                busc_registros,
                cargado: true,
                alert: true,
                guardado: true,
                msj: 'Afiliado encontrado',
                tiempo: 1500,
                botonConfirma: false
            });
        } else {
            resp.render('busc_afi', {
                busc_registros,
                cargado: true,
                alert: true,
                guardado: false,
                msj: 'No se encontró ningún afiliado con ese nombre.'
            });
        }
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
        resp.render('busc_afi', {
            cargado: true,
            alert: true,
            guardado: false,
            msj: 'No se pudo buscar el afiliado.'
        });
    }
};




// para modificar
export const  modafi_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('mod_afi', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
    }
};

export const modificar_afi = async (pet, resp)=>{
    let id, nombre, apellido, telCel, telFijo, plan;
    id = pet.body.clave;
    nombre = pet.body.nombre;
    apellido = pet.body.apellido;
    telCel = pet.body.telCelular;
    telFijo = pet.body.telFijo;
    plan = pet.body.tipo;
      try {
        let modificarsql = "UPDATE afiliado SET nombre = '"+ nombre +"', apellido = '"+ apellido +"', tel_cel = '"+ telCel +"', tel_fijo = '"+ telFijo +"', tipo_plan = '"+ plan +"' WHERE ci_afiliado = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
 resp.render('mod_afi', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Afiliado Modificado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar afiliado:', error);
        resp.render('mod_afi', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar el afiliado.'
        });
    }
};


// para borrar
export const  bajafi_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('baja_afi', { baja_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar afiliado:', error);
    }
}

export const eliminar_afi = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [eliminar_registros] = await bdd.query(eliminarsql);
        console.log(eliminar_registros)
    resp.render('baja_afi', { eliminado: false, federico: true});
    }     catch (error) {
        console.error('Error al eliminbar afiliado:', error);
    }
}

// // va todo tu select para buscar el afiliado que queres borrar
// // DELETE FROM afiliado WHERE ci_afiliado = '"+ clave +"';
