import express from 'express';
import { menu_tur, alta_tur, baja_tur, mod_tur, busc_tur, mos_tur, nuevo_tur, busctur_id } from '../controllers/cont_tur.js';

const rTurno = express.Router();

rTurno.get('/turno', menu_tur)
rTurno.get('/turno/alta', alta_tur)
rTurno.get('/turno/baja', baja_tur)
rTurno.get('/turno/modificar', mod_tur)
rTurno.get('/turno/buscar', busc_tur)
rTurno.get('/turno/mostrar', mos_tur)

rTurno.post('/turno/nuevoalta', nuevo_tur)

rTurno.get('/turno/buscarid/:clave', busctur_id)
export {rTurno}