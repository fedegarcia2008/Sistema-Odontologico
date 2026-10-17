import express from 'express';
import { menu_equi, alta_equi, baja_equi, mod_equi, busc_equi, mos_equi, nuevo_equi} from '../controllers/cont_equi.js';

const rEquipamiento= express.Router();

rEquipamiento.get('/equipamiento', menu_equi)
rEquipamiento.get('/equipamiento/alta', alta_equi)
rEquipamiento.get('/equipamiento/baja', baja_equi)
rEquipamiento.get('/equipamiento/modificar', mod_equi)
rEquipamiento.get('/equipamiento/buscar', busc_equi)
rEquipamiento.get('/equipamiento/mostrar', mos_equi)

rEquipamiento.post('/equipamiento/nuevoalta', nuevo_equi)

rEquipamiento.get('/equipamiento/buscarid/:clave', buscequi_id)
export {rEquipamiento}