const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');

const { homaQuerysShop, rutaAppSheep } = require('../controllers/home');

router.route('/:idUser').get(homaQuerysShop);

router.route('/diego').post(rutaAppSheep);

module.exports = router;