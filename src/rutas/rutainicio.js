import express from 'express';

import { rAfiliado } from './ruta_afi.js';
import { rTurno } from './ruta_tur.js';
import { rConvenio } from './ruta_con.js';
import { rCtaCte } from './ruta_cta.js';
import { rOdontologo } from './ruta_odo.js';
import { rSucursal } from './ruta_suc.js';
import { rHorario } from './ruta_hor.js';
import { rConsultorio } from './ruta_cons.js';
import { rEquipamiento } from './ruta_equi.js';
import { rServicio } from './ruta_ser.js';
import { rHistoria } from './ruta_his.js';


const rInicio = express.Router();

rInicio.get('/', (pet, resp)=>{
    resp.render('index')
})

rInicio.use(rAfiliado)
rInicio.use(rTurno)
rInicio.use(rConvenio)
rInicio.use(rCtaCte)
rInicio.use(rOdontologo)
rInicio.use(rSucursal)
rInicio.use(rHorario)
rInicio.use(rConsultorio)
rInicio.use(rEquipamiento)
rInicio.use(rServicio)
rInicio.use(rHistoria)

export {rInicio}