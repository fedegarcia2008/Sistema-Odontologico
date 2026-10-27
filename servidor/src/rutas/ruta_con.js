import express from 'express';
import { menu_con, alta_con, baja_con, mod_con, busc_con, mos_con, nuevo_con, buscon_id,buscon_nom, modcon_nom, modcon_id, modificar_con, bajacon_id, eliminar_con } from '../controllers/cont_con.js';

const rConvenio = express.Router();

rConvenio.get('/convenio', menu_con)
rConvenio.get('/convenio/alta', alta_con)
rConvenio.get('/convenio/baja', baja_con)
rConvenio.get('/convenio/modificar', mod_con)
rConvenio.get('/convenio/buscar', busc_con)
rConvenio.get('/convenio/mostrar', mos_con)

rConvenio.post('/convenio/nuevoalta', nuevo_con)

//para buscar
rConvenio.get('/convenio/buscarid/:clave', buscon_id)
rConvenio.get('/convenio/buscarnombre/:nombre', buscon_nom)

//para modificar
rConvenio.get('/convenio/modificarid/:clave', modcon_id)
rConvenio.get('/convenio/modificarnom/:nombre', modcon_nom)

rConvenio.post('/convenio/modificar/:clave', modificar_con)

// para borrar
rConvenio.get('/convenio/bajaid/:clave', bajacon_id)
rConvenio.post('/convenio/baja/:clave', eliminar_con)

export {rConvenio}