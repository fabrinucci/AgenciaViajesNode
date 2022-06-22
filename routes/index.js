import express from 'express';
import { 
    paginaIncio,
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasControllers.js'
import { guardarTestimoniales } from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', paginaIncio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);


export default router;