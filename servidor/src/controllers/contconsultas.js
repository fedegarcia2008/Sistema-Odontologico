import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menuconsultas = (pet, resp)=>{
    resp.render('menuconsultas')
}