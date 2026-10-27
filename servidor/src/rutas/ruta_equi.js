import express from 'express';
import { menu_equi, alta_equi, baja_equi, mod_equi, busc_equi, mos_equi, nuevo_equi, buscequi_id, buscequi_fecha, buscequi_cons, modequi_id,modequi_tipo, modificar_equi, buscequi_tipo, bajaequi_id, bajaequi_tipo ,eliminar_equi} from '../controllers/cont_equi.js';

const rEquipamiento= express.Router();

rEquipamiento.get('/equipamiento', menu_equi)
rEquipamiento.get('/equipamiento/alta', alta_equi)
rEquipamiento.get('/equipamiento/baja', baja_equi)
rEquipamiento.get('/equipamiento/modificar', mod_equi)
rEquipamiento.get('/equipamiento/buscar', busc_equi)
rEquipamiento.get('/equipamiento/mostrar', mos_equi)

rEquipamiento.post('/equipamiento/nuevoalta', nuevo_equi)

//para buscar
rEquipamiento.get('/equipamiento/buscarid/:clave', buscequi_id)
rEquipamiento.get('/equipamiento/buscarfecha/:fecha', buscequi_fecha)
rEquipamiento.get('/equipamiento/buscarconsultorio/:idCons', buscequi_cons)
rEquipamiento.get('/equipamiento/buscartipo/:tipo', buscequi_tipo)

//para modificar
rEquipamiento.get('/equipamiento/modificarid/:clave', modequi_id)
rEquipamiento.get('/equipamiento/modificartipo/:tipo', modequi_tipo)
rEquipamiento.post('/equipamiento/modificar/:clave', modificar_equi)

// para borrar
rEquipamiento.get('/equipamiento/bajaid/:clave', bajaequi_id)
rEquipamiento.get('/equipamiento/bajatipo/:tipo', bajaequi_tipo)
rEquipamiento.post('/equipamiento/baja/:clave', eliminar_equi)

export {rEquipamiento}