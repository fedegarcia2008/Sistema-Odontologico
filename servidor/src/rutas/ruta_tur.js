import express from 'express';
import { menu_tur, alta_tur, baja_tur, mod_tur, busc_tur, mos_tur, nuevo_tur, busctur_id, modtur_id, modificar_tur, busctur_fecha } from '../controllers/cont_tur.js';

const rTurno = express.Router();

rTurno.get('/turno', menu_tur)
rTurno.get('/turno/alta', alta_tur)
rTurno.get('/turno/baja', baja_tur)
rTurno.get('/turno/modificar', mod_tur)
rTurno.get('/turno/buscar', busc_tur)
rTurno.get('/turno/mostrar', mos_tur)

rTurno.post('/turno/nuevoalta', nuevo_tur)

rTurno.get('/turno/buscarid/:clave', busctur_id)
rTurno.get('/turno/buscarfecha/:clave', busctur_fecha)

//para modificar
rTurno.get('/turno/modificarid/:clave', modtur_id)
rTurno.post('/turno/modificar/:clave', modificar_tur)

export {rTurno}