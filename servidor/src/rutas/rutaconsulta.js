import express from 'express';
import { menuconsultas, cons1, cons2, cons3, cons4, cons5, busc_cons1, busc_cons3, busc_cons5 } from '../controllers/contconsultas.js';

const rConsulta = express.Router();

rConsulta.get('/consulta', menuconsultas)

// Consulta 1 - Busca y Muestra
rConsulta.get('/consulta/historiaclinica', cons1)
rConsulta.get('/consulta/historiaclinica/:clave', busc_cons1)

// Consulta 2 - Solo Muestra
rConsulta.get('/consulta/especialidadodontologo', cons2)

// Consulta 3 - Busca y Muestra
rConsulta.get('/consulta/tratamiento', cons3)
rConsulta.get('/consulta/tratamiento/:fecha1/:fecha2', busc_cons3)

// Consulta 4 - Solo Muestra
rConsulta.get('/consulta/rankingodontologos', cons4)

// Consulta 5 - Busca y Muestra
// Consulta 3 - Busca y Muestra
rConsulta.get('/consulta/montorecaudado', cons5)
rConsulta.get('/consulta/montorecaudado/:fecha1/:fecha2', busc_cons5)


export {rConsulta}