import express from 'express';
import { menu_his, alta_his, baja_his, mod_his, busc_his, mos_his, nuevo_his, buschis_id, buschis_fecha, modhis_id, modificar_his } from '../controllers/cont_his.js';

const rHistoria = express.Router();

rHistoria.get('/historiaclinica', menu_his)
rHistoria.get('/historiaclinica/alta', alta_his)
rHistoria.get('/historiaclinica/baja', baja_his)
rHistoria.get('/historiaclinica/modificar', mod_his)
rHistoria.get('/historiaclinica/buscar', busc_his)
rHistoria.get('/historiaclinica/mostrar', mos_his)

rHistoria.post('/historiaclinica/nuevoalta', nuevo_his)

rHistoria.get('/historiaclinica/buscarid/:clave', buschis_id)
rHistoria.get('/historiaclinica/buscarfecha/:fecha', buschis_fecha)

//para modificar
rHistoria.get('/historiaclinica/modificarid/:clave', modhis_id)
rHistoria.post('/historiaclinica/modificar/:clave', modificar_his)

export {rHistoria}