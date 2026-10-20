import express from 'express';
import { menu_hor, alta_hor, baja_hor, mod_hor, busc_hor, mos_hor, nuevo_hor, buschor_id, modhis_id, modificar_his } from '../controllers/cont_hor.js';

const rHorario = express.Router();

rHorario.get('/horario', menu_hor)
rHorario.get('/horario/alta', alta_hor)
rHorario.get('/horario/baja', baja_hor)
rHorario.get('/horario/modificar', mod_hor)
rHorario.get('/horario/buscar', busc_hor)
rHorario.get('/horario/mostrar', mos_hor)

rHorario.post('/horario/nuevoalta', nuevo_hor)

rHorario.get('/horario/buscarid/:clave', buschor_id)

//para modificar
rHorario.get('/horario/modificarid/:clave', modhis_id)
rHorario.post('/horario/modificar/:clave', modificar_his)


export {rHorario}