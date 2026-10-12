import express from 'express';
import { menu_his, alta_his, baja_his, mod_his, busc_his, mos_his, nuevo_his } from '../controllers/cont_his.js';

const rHistoria = express.Router();

rHistoria.get('/historia_clinica', menu_his)
rHistoria.get('/historia_clinica/alta', alta_his)
rHistoria.get('/historia_clinica/baja', baja_his)
rHistoria.get('/historia_clinica/modificar', mod_his)
rHistoria.get('/historia_clinica/buscar', busc_his)
rHistoria.get('/historia_clinica/mostrar', mos_his)

rHistoria.post('/historia/nuevoalta', nuevo_his)
export {rHistoria}