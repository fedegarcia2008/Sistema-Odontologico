import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_cons = (pet, resp)=>{
    resp.render('menu_cons')
}

export const alta_cons = (pet, resp)=>{
    resp.render('alta_cons', {alert: false})
}

export const baja_cons = (pet, resp)=>{
    resp.render('baja_cons')
}

export const mod_cons = (pet, resp)=>{
    resp.render('mod_cons')
}

export const busc_cons = (pet, resp)=>{
    resp.render('busc_cons', {federico: false})
}


export const nuevo_cons = async (pet, resp) => {
  console.log(pet.body);
    let id, nro, local;
    id = pet.body.clave;
    nro = pet.body.nCons;
    local = pet.body.idLocal;

    try {

        let altasql = "INSERT INTO consultorio (idconsultorio, numero, local_idlocal) VALUES ('" + id + "', '" + nro + "', '" + local + "');";

         const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('alta_cons', {
            guardado: true,
            alert: true,
            msj: 'Consulta Guardada',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('alta_cons', {
            guardado: false,
            alert: true,
            msj: 'No se pudo guardar la consulta.'
        });
    }
};


export const mos_cons = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio ORDER BY idconsultorio;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mos_cons', { registros });
    } catch (error) {
        console.log("No puede mostrar los Consultorios");
    }
}

export const buscons_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idconsultorio, numero, local_idlocal FROM consultorio WHERE idconsultorio = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
    resp.render('busc_cons', { busc_registros, federico: true });
    }     catch (error) {
        console.error('Error al buscar consultorio:', error);
    }
}