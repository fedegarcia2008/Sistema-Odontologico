import express from 'express';
import { menu_ser, alta_ser, baja_ser, mod_ser, busc_ser, mos_ser, nuevo_ser, buscser_id } from '../controllers/cont_ser.js';

const rServicio = express.Router();

rServicio.get('/servicio/', menu_ser)
rServicio.get('/servicio/alta', alta_ser)
rServicio.get('/servicio/baja', baja_ser)
rServicio.get('/servicio/modificar', mod_ser)
rServicio.get('/servicio/buscar', busc_ser)
rServicio.get('/servicio/mostrar', mos_ser)

rServicio.post('/servicio/nuevoalta', nuevo_ser)

rServicio.get('/servicio/buscarid/:clave', buscser_id)

export {rServicio}