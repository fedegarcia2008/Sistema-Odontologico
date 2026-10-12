import express from 'express';
import { menu_afi, alta_afi, baja_afi, mod_afi, busc_afi, mos_afi, nuevo_afi} from '../controllers/cont_afi.js';

const rAfiliado = express.Router();

rAfiliado.get('/afiliado', menu_afi)
rAfiliado.get('/afiliado/alta', alta_afi)
rAfiliado.get('/afiliado/baja', baja_afi)
rAfiliado.get('/afiliado/modificar', mod_afi)
rAfiliado.get('/afiliado/buscar', busc_afi)
rAfiliado.get('/afiliado/mostrar', mos_afi)

rAfiliado.post('/afiliado/nuevoalta', nuevo_afi)

export {rAfiliado}