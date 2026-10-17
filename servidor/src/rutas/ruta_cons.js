import express from 'express';
import { menu_cons, alta_cons, baja_cons, mod_cons, busc_cons, mos_cons, nuevo_cons, buscons_id} from '../controllers/cont_cons.js';

const rConsultorio = express.Router();

rConsultorio.get('/consultorio', menu_cons)
rConsultorio.get('/consultorio/alta', alta_cons)
rConsultorio.get('/consultorio/baja', baja_cons)
rConsultorio.get('/consultorio/modificar', mod_cons)
rConsultorio.get('/consultorio/buscar', busc_cons)
rConsultorio.get('/consultorio/mostrar', mos_cons)


rConsultorio.post('/consultorio/nuevoalta', nuevo_cons)

rConsultorio.get('/consultorio/buscarid/:clave', buscons_id)


export {rConsultorio}