import express from 'express';
import { menu_suc, /* alta_suc, baja_suc, mod_suc, busc_suc, mos_suc */ } from '../controllers/cont_suc.js';

const rSucursal = express.Router();

rSucursal.get('/sucursal', menu_suc)
/*rSucursal.get('/sucursal/alta', alta_suc)
rSucursal.get('/sucursal/baja', baja_suc)
rSucursal.get('/sucursal/modificar', mod_suc)
rSucursal.get('/sucursal/buscar', busc_suc)
rSucursal.get('/sucursal/mostrar', mos_suc)

rSucursal.post('/sucursal/nuevoalta', nuevo_suc)*/
export {rSucursal}