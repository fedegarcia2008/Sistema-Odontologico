import express from 'express';
import { menu_his, alta_his, baja_his, mod_his, busc_his, mos_his, nuevo_his } from '../controllers/cont_his.js';

const rHistoria = express.Router();

rHistoria.get('/historiaclinica', menu_his)
rHistoria.get('/historiaclinica/alta', alta_his)
rHistoria.get('/historiaclinica/baja', baja_his)
rHistoria.get('/historiaclinica/modificar', mod_his)
rHistoria.get('/historiaclinica/buscar', busc_his)
rHistoria.get('/historiaclinica/mostrar', mos_his)

rHistoria.post('/historiaclinica/nuevoalta', nuevo_his)
export {rHistoria}