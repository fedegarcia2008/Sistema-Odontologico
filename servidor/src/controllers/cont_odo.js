import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_odo = (pet, resp)=>{
    resp.render('menu_odo')
}

export const alta_odo = (pet, resp)=>{
    resp.render('altas/alta_odo', {alert: false})
}

export const baja_odo = (pet, resp)=>{
    resp.render('bajas/baja_odo', {cargado: false})
}

export const mod_odo = (pet, resp)=>{
    resp.render('modificar/mod_odo', {alert: false, cargado: false})
}

export const busc_odo = (pet, resp)=>{
    resp.render('buscar/busc_odo' , { alert: false, cargadoid: false,  cargadotabla: false})
}




export const nuevo_odo = async (pet, resp) => {

    let id, nombre, apellido, esp, cons;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    apellido = pet.body.apellido;
    esp = pet.body.especialidad;
    cons = pet.body.idCons;

    try {

        let altasql = "INSERT INTO odontologo (idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio) VALUES ('" + id + "', '" + nombre + "', '" + apellido + "', '" + esp + "', '" + cons + "');";

        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_odo', {
            alert: true,
            icono: 'success',
            msj: 'ODONTÓLOGO GUARDADO',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_odo', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL ODONTÓLOGO',
            tiempo: 1500,
        });
    }
};


export const mos_odo = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo ORDER BY idodontologo;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_odo', { registros });
    } catch (error) {
        console.log("No puede mostrar los odontologos");
    }
}


export const buscodo_id = async (pet, resp)=>{
      let id = pet.params.clave;
      try {
        let buscarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE idodontologo = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
       if (busc_registros.length > 0) {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'ODONTÓLOGO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN ODONTÓLOGO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar odontólogo:', error);
        resp.render('buscar/busc_odo', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL ODONTÓLOGO',
            tiempo: 2000,
        });
    }
};


export const buscodo_nom = async (pet, resp)=>{
      let nom_completo = pet.params.nombre;
      
      try {
        let buscarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE CONCAT (apellido,' ', nombre) LIKE '%" + nom_completo + "%'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'ODONTÓLOGO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN ODONTÓLOGO CON ESE NOMBRE'
            });
        }
    } catch (error) {
        console.error('Error al buscar odontólogo:', error);
        resp.render('buscar/busc_odo', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL ODONTÓLOGO',
            tiempo: 2000,
        });
    }
};

export const buscodo_cons = async (pet, resp)=>{
      let cons = pet.params.cons;
      
      try {
        let buscarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE consultorio_idconsultorio = '"+ cons +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'ODONTÓLOGO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN ODONTÓLOGO CON ESE ID'
            });
        }
    } catch (error) {
        console.error('Error al buscar odontólogo:', error);
        resp.render('buscar/busc_odo', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL ODONTÓLOGO',
            tiempo: 2000,
        });
    }
};

export const buscodo_espe = async (pet, resp)=>{
      let espe = pet.params.espe;
      
      try {
        let buscarsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE especialidad = '"+ espe +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'success',
                msj: 'ODONTÓLOGO ENCONTRADO',
                tiempo: 2000,
            });
        } else {
            resp.render('buscar/busc_odo', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                icono: 'info',
                tiempo: 2000,
                msj: 'NO SE ENCONTRÓ NINGUN ODONTÓLOGO CON ESA ESPECIALIDAD'
            });
        }
    } catch (error) {
        console.error('Error al buscar odontólogo:', error);
        resp.render('buscar/busc_odo', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL ODONTÓLOGO',
            tiempo: 2000,
        });
    }
};

// para modificar
export const  mododo_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE idodontologo = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('modificar/mod_odo', { busc_registros, cargado: true, alert: false });
    } catch (error) {
        console.error('Error al buscar el odontologo:', error);
    }
};

export const mod_id = async (pet, resp)=>{
  let id, nombre, apellido, esp, cons;

    id = pet.body.clave;
    nombre = pet.body.nombre;
    apellido = pet.body.apellido;
    esp = pet.body.especialidad;
    cons = pet.body.idCons;

      try {
        let modificarsql = "UPDATE odontologo SET nombre = '"+ nombre +"', apellido = '"+ apellido+"', especialidad = '"+ esp +"' WHERE idodontologo = '"+ id +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
 resp.render('modificar/mod_odo', {
            cargado: false,
            alert: true,
            guardado: true,
            msj: 'Odontologo Modificado',
            tiempo: 1500,
            botonConfirma: false
        });
    } catch (error) {
        console.error('Error al modificar odontologo:', error);
        resp.render('modificar/mod_con', {
            cargado: false,
            alert: true,
            guardado: false,
            msj: 'No se pudo modificar el odontologo'
        });
    }
};


export const  mododo_nom = async (pet, resp)=>{
let nom_completo = pet.params.nombre;
      try {
        let buscsql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE CONCAT (apellido,' ', nombre) LIKE '%" + nom_completo + "%'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('modificar/mod_odo', { busc_registros, cargado: true });
    } catch (error) {
        console.error('Error al buscar odontologo:', error);
    }
};

export const mod_nom = async (pet, resp)=>{
    let  nom, apellido, esp;
    
    nom = pet.body.nombre;
    apellido = pet.body.apellido;
    esp = pet.body.especialidad;
   


     try {
        let modificarsql = "UPDATE afiliado SET nombre = '"+ nom +"', apellido= '"+ apellido+"', especialidad= '"+ esp+"' WHERE nombre  = '"+ nom +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
resp.render('modificar/mod_odo', { modificar_registros, cargado: true});
    } catch (error) {
        console.error('Error al modificar odontologo', error);
    }
};


// para borrar
export const  bajaodo_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE idodontologo = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_odo', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar odontologo:', error);
    }
}

export const eliminar_odo = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM odontologo WHERE idodontologo = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('bajas/baja_odo', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar odontologo:', error);
    }
}

export const bajaodo_nom = async (pet, resp)=>{
let nom = pet.params.nom;
      try {
        let bajasql = "SELECT idodontologo, nombre, apellido, especialidad, consultorio_idconsultorio FROM odontologo WHERE CONCAT(apellido, ' ', nombre) = '"+ nom +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_odo', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar odontologo:', error);
    }
}


export const eliminar_nom = async (pet, resp)=>{
let nom = pet.params.nom;
      try {
        let eliminarsql = "DELETE FROM odontologo WHERE CONCAT(apellido, ' ', nombre) = '"+ nom +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('bajas/baja_odo', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar odontologo:', error);
    }
}