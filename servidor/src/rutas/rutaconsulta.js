import express from 'express';
import { menuconsultas, cons1, cons2, busc_cons1 } from '../controllers/contconsultas.js';

const rConsulta = express.Router();

rConsulta.get('/consulta', menuconsultas)

// Consulta 1 - Busca y Muestra
rConsulta.get('/consulta/historiaclinica', cons1)
rConsulta.get('/consulta/historiaclinica/:clave', busc_cons1)

// Consulta 2 - Solo Muestra
rConsulta.get('/consulta/especialidadodontologo', cons2)


export {rConsulta}