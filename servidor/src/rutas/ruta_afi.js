import express from 'express';
import { menu_afi, alta_afi, baja_afi, mod_afi, busc_afi, mos_afi, nuevo_afi, modafi_id, modafi_nom , modificar_afi, buscafi_plan, buscafi_id, buscafi_nom, bajafi_id, eliminar_afi, bajafi_nom} from '../controllers/cont_afi.js';

const rAfiliado = express.Router();

rAfiliado.get('/afiliado', menu_afi)
rAfiliado.get('/afiliado/alta', alta_afi)
rAfiliado.get('/afiliado/baja', baja_afi)
rAfiliado.get('/afiliado/modificar', mod_afi)
rAfiliado.get('/afiliado/buscar', busc_afi)
rAfiliado.get('/afiliado/mostrar', mos_afi)

rAfiliado.post('/afiliado/nuevoalta', nuevo_afi)

// para buscar
rAfiliado.get('/afiliado/buscarid/:clave', buscafi_id)
rAfiliado.get('/afiliado/buscarnombre/:nombre', buscafi_nom)
rAfiliado.get('/afiliado/buscartipoplan/:plan', buscafi_plan)

// rAfiliado.get('/afiliado/buscarxdni/:apehtml/:nomhtml', fun1)

//para modificar
rAfiliado.get('/afiliado/modificarid/:clave', modafi_id)
rAfiliado.get('/afiliado/modificarnombre/:nombre', modafi_nom)

// rAfiliado.get('/afiliado/modificarnombre/:nombre', modafi_nom)
rAfiliado.post('/afiliado/modificar/:clave', modificar_afi)



// para borrar
rAfiliado.get('/afiliado/bajaid/:clave', bajafi_id)
rAfiliado.get('/afiliado/bajanombre/:nombre', bajafi_nom)

rAfiliado.post('/afiliado/baja/:clave', eliminar_afi)

export {rAfiliado}