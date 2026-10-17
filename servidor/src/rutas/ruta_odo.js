import express from 'express';
import { menu_odo, alta_odo, baja_odo, mod_odo, busc_odo, mos_odo, nuevo_odo, buscodo_id } from '../controllers/cont_odo.js';

const rOdontologo = express.Router();

rOdontologo.get('/odontologo', menu_odo)
rOdontologo.get('/odontologo/alta', alta_odo)
rOdontologo.get('/odontologo/baja', baja_odo)
rOdontologo.get('/odontologo/modificar', mod_odo)
rOdontologo.get('/odontologo/buscar', busc_odo)
rOdontologo.get('/odontologo/mostrar', mos_odo)

rOdontologo.post('/odontologo/nuevoalta', nuevo_odo)
rOdontologo.get('/odontologo/buscarid/:clave', buscodo_id)
export {rOdontologo}