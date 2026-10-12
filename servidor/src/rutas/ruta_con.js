import express from 'express';
import { menu_con, alta_con, baja_con, mod_con, busc_con, mos_con, nuevo_con } from '../controllers/cont_con.js';

const rConvenio = express.Router();

rConvenio.get('/convenio', menu_con)
rConvenio.get('/convenio/alta', alta_con)
rConvenio.get('/convenio/baja', baja_con)
rConvenio.get('/convenio/modificar', mod_con)
rConvenio.get('/convenio/buscar', busc_con)
rConvenio.get('/convenio/mostrar', mos_con)

rConvenio.post('/convenio/nuevoalta', nuevo_con)

export {rConvenio}