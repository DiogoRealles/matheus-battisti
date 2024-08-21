const express = require('express');
const router = express.Router();

const PetController = require('../controllers/PetController');

const verifyToken = require('../helpers/verify-token');
const { imageUpload } = require('../helpers/image-upload');

router.post(
  '/create',
  verifyToken,
  imageUpload.array('images'),
  PetController.create
);

router.get('/', PetController.getAll);
router.get('/mypets', PetController.getAllUserPets);
router.get('/myadoptions', PetController.getAllUserAdoptions);
router.get('/:id', PetController.getPetById);
router.delete('/:id', verifyToken, PetController.removePetById);

module.exports = router;
