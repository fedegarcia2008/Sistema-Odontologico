import {conector} from '../database/conexion.js';

const bdd = await conector();

export const menu_suc = (pet, resp)=>{
    resp.render('menu_suc')
}
/*
export const alta_suc = (pet, resp)=>{
    resp.render('alta_suc')
}

export const baja_suc = (pet, resp)=>{
    resp.render('baja_suc')
}

export const mod_suc = (pet, resp)=>{
    resp.render('mod_suc')
}

export const busc_suc = (pet, resp)=>{
    resp.render('busc_suc')
}

export const mos_suc = (pet, resp)=>{
    resp.render('mos_suc')
}
*/