import express from 'express';
import { menuconsultas, cons1, busc_cons1 } from '../controllers/contconsultas.js';

const rConsulta = express.Router();

rConsulta.get('/consulta', menuconsultas)

rConsulta.get('/consulta/historiaclinica', cons1)
rConsulta.get('/consulta/historiaclinica/:clave', busc_cons1)
// rConsulta.get('/consulta/historiaclinica', mos_cons1)

export {rConsulta}