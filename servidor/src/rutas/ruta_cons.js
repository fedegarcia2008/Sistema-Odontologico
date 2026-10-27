import express from 'express';
import { menu_cons, alta_cons, baja_cons, mod_cons, busc_cons, mos_cons, nuevo_cons, buscons_id, buscons_nrocons, modcons_id, modcons_num ,modificar_cons, bajacons_id, bajacons_num ,eliminar_cons} from '../controllers/cont_cons.js';

const rConsultorio = express.Router();

rConsultorio.get('/consultorio', menu_cons)
rConsultorio.get('/consultorio/alta', alta_cons)
rConsultorio.get('/consultorio/baja', baja_cons)
rConsultorio.get('/consultorio/modificar', mod_cons)
rConsultorio.get('/consultorio/buscar', busc_cons)
rConsultorio.get('/consultorio/mostrar', mos_cons)

rConsultorio.post('/consultorio/nuevoalta', nuevo_cons)

//para buscar
rConsultorio.get('/consultorio/buscarid/:clave', buscons_id)
rConsultorio.get('/consultorio/buscarconsultorio/:cons', buscons_nrocons)

//para modificar
rConsultorio.get('/consultorio/modificarid/:clave', modcons_id)
rConsultorio.get('/consultorio/modificarnum/:num', modcons_num)
rConsultorio.post('/consultorio/modificar/:clave', modificar_cons)

// para borrar
rConsultorio.get('/consultorio/bajaid/:clave', bajacons_id)
rConsultorio.get('/consultorio/bajanum/:num', bajacons_num)
rConsultorio.post('/consultorio/baja/:clave', eliminar_cons)

export {rConsultorio}