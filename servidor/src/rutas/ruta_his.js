import express from 'express';
import { menu_his, alta_his, baja_his, mod_his, busc_his, mos_his, nuevo_his, buschis_id, buschis_fecha, buschis_afi, buschis_odo, buschis_trat, modhis_id, modificar_his, bajahis_id, eliminar_his, modhis_afi, bajahis_afi} from '../controllers/cont_his.js';

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
rHistoria.get('/historiaclinica/buscarafiliado/:idAfi', buschis_afi)
rHistoria.get('/historiaclinica/buscarodontologo/:idOdo', buschis_odo)
rHistoria.get('/historiaclinica/buscartratamientorealizado/:trat_rea', buschis_trat)

//para modificar
rHistoria.get('/historiaclinica/modificarid/:clave', modhis_id)
rHistoria.get('/historiaclinica/modificarafiliado/:idAfi', modhis_afi)
rHistoria.post('/historiaclinica/modificar/:clave', modificar_his)




// para borrar
rHistoria.get('/historiaclinica/bajaid/:clave', bajahis_id)
rHistoria.get('/historiaclinica/bajaafiliado/:idAfi', bajahis_afi)
rHistoria.post('/historiaclinica/baja/:clave', eliminar_his)

export {rHistoria}