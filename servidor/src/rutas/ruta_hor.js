import express from 'express';

import { menu_hor, alta_hor, baja_hor, mod_hor, busc_hor, mos_hor, nuevo_hor, buschor_id, buschor_odo, buschor_dia, modhor_id, modhor_dia, modificar_hor, bajahor_id, bajahor_dia, eliminar_hor } from '../controllers/cont_hor.js';

const rHorario = express.Router();

rHorario.get('/horario', menu_hor)
rHorario.get('/horario/alta', alta_hor)
rHorario.get('/horario/baja', baja_hor)
rHorario.get('/horario/modificar', mod_hor)
rHorario.get('/horario/buscar', busc_hor)
rHorario.get('/horario/mostrar', mos_hor)

rHorario.post('/horario/nuevoalta', nuevo_hor)


//para buscar
rHorario.get('/horario/buscarid/:clave', buschor_id)
rHorario.get('/horario/buscardia/:dia', buschor_dia)
rHorario.get('/horario/buscarodontologo/:idOdo', buschor_odo)

//para modificar
rHorario.get('/horario/modificarid/:clave', modhor_id)
rHorario.get('/horario/modificardia/:dia', modhor_dia)
rHorario.post('/horario/modificar/:clave', modificar_hor)

// para borrar
rHorario.get('/horario/bajaid/:clave', bajahor_id)
rHorario.get('/horario/bajadia/:dia', bajahor_dia)
rHorario.post('/horario/baja/:clave', eliminar_hor)


export {rHorario}