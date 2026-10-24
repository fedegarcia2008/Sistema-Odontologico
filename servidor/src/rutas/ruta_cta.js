import express from 'express';

import { menu_cta, alta_cta, baja_cta, mod_cta, busc_cta, mos_cta, nuevo_cta, buscta_id, modificar_cta, modcta_id, buscta_his, bajacta_id, eliminar_cta } from '../controllers/cont_cta.js';

const rCtaCte = express.Router();

rCtaCte.get('/cuentacorriente', menu_cta)
rCtaCte.get('/cuentacorriente/alta', alta_cta)
rCtaCte.get('/cuentacorriente/baja', baja_cta)
rCtaCte.get('/cuentacorriente/modificar', mod_cta)
rCtaCte.get('/cuentacorriente/buscar', busc_cta)
rCtaCte.get('/cuentacorriente/mostrar', mos_cta)

rCtaCte.post('/cuentacorriente/nuevoalta', nuevo_cta)

rCtaCte.get('/cuentacorriente/buscarid/:clave', buscta_id)
rCtaCte.get('/cuentacorriente/buscaridhis/:clavehis', buscta_his)

//para modificar
rCtaCte.get('/cuentacorriente/modificarid/:clave', modcta_id)
rCtaCte.post('/cuentacorriente/modificar/:clave', modificar_cta)

// para borrar
rCtaCte.get('/cuentacorriente/bajaid/:clave', bajacta_id)
rCtaCte.post('/cuentacorriente/baja/:clave', eliminar_cta)

export {rCtaCte}