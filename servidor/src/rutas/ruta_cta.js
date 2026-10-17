import express from 'express';
import { menu_cta, alta_cta, baja_cta, mod_cta, busc_cta, mos_cta, nuevo_cta, buscta_id } from '../controllers/cont_cta.js';

const rCtaCte = express.Router();

rCtaCte.get('/cuentacorriente', menu_cta)
rCtaCte.get('/cuentacorriente/alta', alta_cta)
rCtaCte.get('/cuentacorriente/baja', baja_cta)
rCtaCte.get('/cuentacorriente/modificar', mod_cta)
rCtaCte.get('/cuentacorriente/buscar', busc_cta)
rCtaCte.get('/cuentacorriente/mostrar', mos_cta)

rCtaCte.post('/cuentacorriente/nuevoalta', nuevo_cta)

rCtaCte.get('/cuentacorriente/buscarid/:clave', buscta_id)
export {rCtaCte}