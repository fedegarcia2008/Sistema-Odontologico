import express from 'express';
import { menu_tur, alta_tur, baja_tur, mod_tur, busc_tur, mos_tur, nuevo_tur, busctur_id, busctur_fechas, busctur_afi, busctur_odo, modtur_id, modificar_tur, busctur_fecha, bajatur_id, eliminar_tur , modtur_fechas } from '../controllers/cont_tur.js';

const rTurno = express.Router();

rTurno.get('/turno', menu_tur)
rTurno.get('/turno/alta', alta_tur)
rTurno.get('/turno/baja', baja_tur)
rTurno.get('/turno/modificar', mod_tur)
rTurno.get('/turno/buscar', busc_tur)
rTurno.get('/turno/mostrar', mos_tur)

rTurno.post('/turno/nuevoalta', nuevo_tur)

// para buscar
rTurno.get('/turno/buscarid/:clave', busctur_id)
rTurno.get('/turno/buscarfecha/:fecha', busctur_fecha)
rTurno.get('/turno/buscarperiodo/:fecha1/:fecha2', busctur_fechas);
rTurno.get('/turno/buscarodontologo/:idOdo', busctur_odo)
rTurno.get('/turno/buscarafiliado/:idAfi', busctur_afi)


//para modificar
rTurno.get('/turno/modificarid/:clave', modtur_id)
rTurno.post('/turno/modificar/:clave', modificar_tur)

rTurno.get('/turno/modificarperiodo/:fecha1/:fecha2', modtur_fechas);

// para borrar
rTurno.get('/turno/bajaid/:clave', bajatur_id)
rTurno.post('/turno/baja/:clave', eliminar_tur)

export {rTurno}