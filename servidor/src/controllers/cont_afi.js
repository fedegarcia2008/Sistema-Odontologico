import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_afi = (pet, resp)=>{
    resp.render('menu_afi')
}

export const alta_afi = (pet, resp)=>{
    resp.render('altas/alta_afi', {alert: false})
}

export const baja_afi = (pet, resp)=>{
    resp.render('bajas/baja_afi', {cargado: false})
}

export const mod_afi = (pet, resp)=>{
    resp.render('modificar/mod_afi',  {alert: false, cargado: false, modalert: false, guardado:false} )
}

export const busc_afi = (pet, resp)=>{
    resp.render('buscar/busc_afi', {alert: false, cargadoid: false, cargadotabla: false})
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
    telCel = pet.body.telCelular;
   

    telFijo = pet.body.telFijo;
    


    plan = pet.body.tipo;

    try {

       let altasql = "INSERT INTO afiliado (ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan) VALUES ('" + id + "', '" + nombre + "', '" + apellido + "', '" + telCel + "', '" + telFijo + "', '" + plan + "');";
 
        const [registro] = await bdd.query(altasql);
        console.log(registro)
        resp.render('altas/alta_afi', {
            alert: true,
            icono: 'success',
            msj: 'AFILIADO GUARDADO',
            tiempo: 1500,
        });
    } catch (error) {
        console.error('Error en la sentencia INSERT:', error);
        resp.render('altas/alta_afi', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL GUARDAR EL AFILIADO',
            tiempo: 1500,
        });
    }
};


export const mos_afi = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado ORDER BY ci_afiliado;";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('mostrar/mos_afi', { registros });
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
            resp.render('buscar/busc_afi', {
                busc_registros,
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'success',
                msj: 'AFILIADO ENCONTRADO',
                tiempo: 1500,
            });
        } else {
            resp.render('buscar/busc_afi', {
                busc_registros,
             
                cargadoid: true, cargadotabla: false,
                alert: true,
                icono: 'info',
                tiempo: 1500,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESA CI'
            });
        }
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
        resp.render('buscar/busc_afi', {
            alert: true,
            icono: 'error',
            msj: 'ERROR AL BUSCAR EL AFILIADO',
            tiempo: 1500,
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
            resp.render('buscar/busc_afi', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                guardado: true,
                msj: 'Afiliado encontrado',
                tiempo: 1500,
                botonConfirma: false
            });
        } else {
            resp.render('buscar/busc_afi', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                guardado: false,
                msj: 'No se encontró ningún afiliado con ese nombre.'
            });
        }
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
        resp.render('buscar/busc_afi', {
            cargadoid: false, cargadotabla: true,
            alert: true,
            guardado: false,
            msj: 'No se pudo buscar el afiliado.'
        });
    }
};


export const buscafi_plan = async (pet, resp)=>{
      let plan = pet.params.plan;
      
      try {
        let buscarsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE tipo_plan = '"+ plan +"'";
        const [busc_registros] = await bdd.query(buscarsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('buscar/busc_afi', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                guardado: true,
                msj: 'Afiliado encontrado',
                tiempo: 1500,
                botonConfirma: false
            });
        } else {
            resp.render('buscar/busc_afi', {
                busc_registros,
                cargadoid: false, cargadotabla: true,
                alert: true,
                guardado: false,
                msj: 'No se encontró ningún afiliado con ese nombre.'
            });
        }
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
        resp.render('buscar/busc_afi', {
            cargadoid: false, cargadotabla: true,
            alert: true,
            guardado: false,
            msj: 'No se pudo buscar el afiliado.'
        });
    }
};



// buscar para modificar
export const  modafi_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let buscsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
        if (busc_registros.length > 0) {
            resp.render('modificar/mod_afi', {
                busc_registros,
                cargado: true,
                alert: true,
                guardado: true,
                msj: 'AFILIADO ENCONTRADO',
                tiempo: 1500,
            });
        } else {
            resp.render('modificar/mod_afi', {
                busc_registros,
                cargado: true,
                alert: true,
                guardado: false,
                tiempo: 1500,
                msj: 'NO SE ENCONTRÓ NINGUN AFILIADO CON ESA CI'
            });
        }
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
        resp.render('modificar/mod_afi', {
            cargado: true,
            alert: true,
            guardado: false,
            msj: 'ERROR AL BUSCAR EL AFILIADO'
        });
    }
};

export const mod_id = async (pet, resp)=>{
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
      
            resp.render('modificar/mod_afi', {
                mod_registros,
                cargado: false,
                alert: true,
                modalert: true,
                msj: 'AFILIADO MODIFICADO',
                tiempo: 1500,
            });
     
    } catch (error) {
        console.error('Error al modificar afiliado:', error);
        // ALERTA ERROR (cae en el último else del template)
        resp.render('modificar/mod_afi', {
         
            cargado: false,
            alert: true,
            modalert: true,
            msj: 'ERROR AL MODIFICAR EL AFILIADO',
            tiempo: 1500,
        });
    }
};


export const  modafi_nom = async (pet, resp)=>{
let nom_completo = pet.params.nombre;
      try {
        let buscsql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE CONCAT (apellido,' ', nombre) LIKE '%" + nom_completo + "%'";;
        const [busc_registros] = await bdd.query(buscsql);
        console.log(busc_registros)
resp.render('modificar/mod_afi', { busc_registros, cargado: true });
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
    }
};

export const mod_nom = async (pet, resp)=>{
    let  nom, apellido, telCel, telFijo, plan;
    
    nom = pet.body.nombre;
    apellido = pet.body.apellido;
    telCel = pet.body.telCelular;
    telFijo = pet.body.telFijo;
    plan = pet.body.tipo;

     try {
        let modificarsql = "UPDATE afiliado SET nombre = '"+ nom +"', apellido= '"+ apellido+"', tel_cel= '"+ telCel+"', tel_fijo= '"+ telFijo+"', tipo_plan= '"+ plan+"'WHERE nombre  = '"+ nom +"'";
        const [modificar_registros] = await bdd.query(modificarsql);
        console.log(modificar_registros)
resp.render('modificar/mod_afi', { modificar_registros, cargado: true});
    } catch (error) {
        console.error('Error al modificar afiliado', error);
    }
};





// para borrar
export const  bajafi_id = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let bajasql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
    resp.render('bajas/baja_afi', { baja_registros, cargado: true });
    }     catch (error) {
        console.error('Error al buscar afiliado:', error);
    }
}

export const eliminar_afi = async (pet, resp)=>{
let id = pet.params.clave;
      try {
        let eliminarsql = "DELETE FROM afiliado WHERE ci_afiliado = '"+ id +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('bajas/baja_afi', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar afiliado:', error);
    }
}


export const  bajafi_nom = async (pet, resp)=>{
let nom_completo = pet.params.nombre;
      try {
        let bajasql = "SELECT ci_afiliado, nombre, apellido, tel_cel, tel_fijo, tipo_plan FROM afiliado WHERE CONCAT (apellido,' ', nombre) LIKE '%" + nom_completo + "%'";;
        const [baja_registros] = await bdd.query(bajasql);
        console.log(baja_registros)
resp.render('bajas/baja_afi', { baja_registros, cargado: true });
    } catch (error) {
        console.error('Error al buscar afiliado:', error);
    }
};
export const eliminar_nom = async (pet, resp)=>{
let nom_completo = pet.params.nombre;
      try {
        let eliminarsql = "DELETE FROM afiliado WHERE nombre = '"+ nom_completo +"'";
        const [baja_registros] = await bdd.query(eliminarsql);
        console.log(baja_registros)
    resp.render('bajas/baja_afi', { baja_registros, cargado: true});
    }     catch (error) {
        console.error('Error al eliminar afiliado:', error);
    }
}


// // va todo tu select para buscar el afiliado que queres borrar
// // DELETE FROM afiliado WHERE ci_afiliado = '"+ clave +"';
