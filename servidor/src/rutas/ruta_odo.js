import express from 'express';

import { menu_odo, alta_odo, baja_odo, mod_odo, busc_odo, mos_odo, nuevo_odo, mododo_nom, mod_nom, buscodo_id, buscodo_nom, mododo_id, buscodo_cons, buscodo_espe, mod_id, bajaodo_id,  eliminar_odo, bajaodo_nom, eliminar_nom } from '../controllers/cont_odo.js';

const rOdontologo = express.Router();

rOdontologo.get('/odontologo', menu_odo)
rOdontologo.get('/odontologo/alta', alta_odo)
rOdontologo.get('/odontologo/baja', baja_odo)
rOdontologo.get('/odontologo/modificar', mod_odo)
rOdontologo.get('/odontologo/buscar', busc_odo)
rOdontologo.get('/odontologo/mostrar', mos_odo)

rOdontologo.post('/odontologo/nuevoalta', nuevo_odo)

// para buscar
rOdontologo.get('/odontologo/buscarid/:clave', buscodo_id)
rOdontologo.get('/odontologo/buscarnombre/:nombre', buscodo_nom)
rOdontologo.get('/odontologo/buscarconsultorio/:cons', buscodo_cons)
rOdontologo.get('/odontologo/buscarespecialidad/:espe', buscodo_espe)

//para modificar
rOdontologo.get('/odontologo/modificarid/:clave', mododo_id)
rOdontologo.post('/odontologo/modificar/:clave', mod_id)

rOdontologo.get('/odontologo/modificarnombre/:nombre', mododo_nom)
rOdontologo.post('/odontologo/modificar/:nombre', mod_nom)

// para borrar
rOdontologo.get('/odontologo/bajaid/:clave', bajaodo_id)
rOdontologo.post('/odontologo/baja/:clave', eliminar_odo)

rOdontologo.get('/odontologo/bajanom/:nom', bajaodo_nom)
rOdontologo.post('/odontologo/baja/:nom', eliminar_nom)

export {rOdontologo}