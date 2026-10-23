import express from 'express';
import { menu_ser, alta_ser, baja_ser, mod_ser, busc_ser, mos_ser, nuevo_ser, buscser_id, buscser_nom, modser_id, modificar_ser } from '../controllers/cont_ser.js';

const rServicio = express.Router();

rServicio.get('/servicio/', menu_ser)
rServicio.get('/servicio/alta', alta_ser)
rServicio.get('/servicio/baja', baja_ser)
rServicio.get('/servicio/modificar', mod_ser)
rServicio.get('/servicio/buscar', busc_ser)
rServicio.get('/servicio/mostrar', mos_ser)

rServicio.post('/servicio/nuevoalta', nuevo_ser)

//para buscar
rServicio.get('/servicio/buscarid/:clave', buscser_id)
rServicio.get('/servicio/buscarnombre/:nom', buscser_nom)

//para modificar
rServicio.get('/servicio/modificarid/:clave', modser_id)
rServicio.post('/servicio/modificar/:clave', modificar_ser)


export {rServicio}