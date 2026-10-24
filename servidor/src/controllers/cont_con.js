import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_con = (pet, resp)=>{
    resp.render('menu_con')
}

export const alta_con = (pet, resp)=>{
    resp.render('alta_con', {alert: false})
}

export const baja_con = (pet, resp)=>{
    resp.render('baja_con', {cargado: false})
}

export const mod_con = (pet, resp)=>{
    resp.render('mod_con', {alert: false, cargado: false} )
}

export const busc_con = (pet, resp)=>{
    resp.render('busc_con', {cargadoid: false, cargadotabla: false,})
}


export const nuevo_con = async (pet, resp) => {

    let id, nombre, rebaja;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    rebaja = pet.body.rebaja;
    try {

        let altasql = "INSERT INTO convenio (idconvenio, nombre, rebaja) VALUES ('" + id + "', '" + nombre + "', '" + rebaja + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_con', {
            guardado: true,
            alert: true,
            msj: 'Convenio Guardado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_con', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar el convenio.'
        });
    }
};


export const mos_con = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconvenio, nombre, rebaja FROM convenio ORDER BY idconvenio;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_con', { registros });
    } catch (error) {
        console.log("No puede mostrar los convenios");
    }
}


export const buscon_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE idconvenio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_con', { busc_registros, cargadoid: true, cargadotabla: false,});
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}

export const buscon_nom = async (pet, resp)=>{
      let nom = pet.params.nombre;
      try {
        let buscarsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE nombre = '"+ nom +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_con', { busc_registros, cargadoid: false, cargadotabla: true,});
    }     catch (error) {
        console.error('Error al buscar la consulta:', error);
    }
}



// para modificar
export const  modcon_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE idconvenio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('mod_con', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar el convenio:', error);
    }
};

export const modificar_con = async (pet, resp)=>{
     let id, nombre, rebaja;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    rebaja = pet.body.rebaja;

      try {
        let modificarsql = "UPDATE convenio SET nombre = '"+ nombre +"', rebaja = '"+ rebaja+"' WHERE idconvenio = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
 resp.render('mod_con', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Convenio Modificado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar convenio:', error);
        resp.render('mod_con', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar el convenio'
        });
    }
};


// para borrar
export const  bajacon_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idconvenio, nombre, rebaja FROM convenio WHERE idconvenio = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('baja_con', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar convenio:', error);
    }
}

export const eliminar_con = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM convenio WHERE idconvenio = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('baja_con', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar convenio:', error);
    }
}