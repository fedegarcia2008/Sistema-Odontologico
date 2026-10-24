import express from 'express';
import { menuconsultas } from '../controllers/contconsultas.js';

const rConsulta = express.Router();

rConsulta.get('/consulta', menuconsultas)

export {rConsulta}